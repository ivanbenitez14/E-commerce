import './estyles.css';
import { useNavigate } from 'react-router-dom';
import { useEcommStore } from '../hooks/useEcommStore';
import { useState, useEffect } from 'react';
import { ProductCard } from './components/ProductCard';
import { useAuthStore } from '../hooks/useAuthStore';
import { useForm } from '../hooks/useForm';
import { CreateProduct } from './components/CreateProduct';
import { UpdateProduct } from './components/UpdateProduct';
import { Filters } from './components/Filters';

const productFormFields = {
  name: '',
  description: '',
  image_url: '',
  price: '',
  brandName: '',
  logo_url: '',
  brandId: '',
};

export const EcommercePage = () => {
  const { startGettingProducts, startSettingProducts, startDeletingProducts } = useEcommStore();
  const { status, startLogout } = useAuthStore();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);

  const [brandIdOptions, setBrandIdOptions] = useState([]);

  const navigate = useNavigate();

  const {
    name,
    description,
    image_url,
    price,
    brandName,
    logo_url,
    brandId,
    onInputChange,
  } = useForm(productFormFields);

  const onLoginClick = () => {
    navigate('/auth/');
  };

  const onLogoutClick = () => {
    startLogout();
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const openAddProductModal = () => {
    setIsAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setIsAddProductModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const updatedProducts = await startGettingProducts();
      if (updatedProducts) {
        setProducts(updatedProducts);

        const brandIdOptions = updatedProducts.map((product) => ({
          id: product.id,
          name: product.brandName,
        }));

        setBrandIdOptions(brandIdOptions);
      }
    };
    fetchData();
  }, [isEditProductModalOpen]);

  const productSubmit = async (event) => {
    event.preventDefault();
    try {
      await startSettingProducts({
        name,
        description,
        image_url,
        price,
        brandName,
        logo_url,
        brandId,
      });
  
      const updatedProducts = await startGettingProducts();
  
      if (updatedProducts) {
        setProducts(updatedProducts);
      }
  
      closeAddProductModal();
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };  

  // ACTUALIZACION  
  const onEditProduct = (productId) => {
    setIsEditProductModalOpen(true);

    const productToEdit = products.find((product) => product.id === productId);
    setSelectedProduct(productToEdit);
  };

  const handleInputChange = (e, property) => {
    console.log('Event:', e);
    console.log('Property:', property);
    const updatedFormFields = {
      name,
      description,
      image_url,
      price,
      brandName,
      logo_url,
      brandId,
      [property]: e.target.value,
    };

    onInputChange(updatedFormFields);
  };


  // ELIMINACION
  const onDeleteProduct = async (productId) => {
    try {
      await startDeletingProducts(productId);
      const updatedProducts = products.filter(product => product.id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="brand" href="#">
          E-Crowdmmerce
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto">
            {status === 'authenticated' && (
              <button
                onClick={openAddProductModal}
                className="btn btn-outline-primary"
                style={{ marginRight: '10px' }}
              >
                <span>Añadir producto</span>
              </button>
            )}
            {status === 'authenticated' ? (
              <button onClick={onLogoutClick} className="btn btn-outline-danger">
                <span>Logout</span>
              </button>
            ) : (
              <button onClick={onLoginClick} className="btn btn-outline-primary">
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="row">

        <Filters />

        <div className="col-md-9 mt-4">
          <div className="row">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOpenModal={openModal} 
                onEditProduct={onEditProduct}
                onDeleteProduct={onDeleteProduct}
              />
            ))}
          </div>
        </div>

      </div>

      {/* MODALES */}
      <div id="productModal" className="modal" style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              {selectedProduct && (
                <div>
                  <img src={selectedProduct.image_url} className="card-img-top" alt={selectedProduct.name} />
                  <p>{selectedProduct.name}</p>
                  <p>Marca: {selectedProduct.brands.name}</p>
                  <p>Detalles: {selectedProduct.description}</p>
                  <p>Precio: ${selectedProduct.price}</p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {isAddProductModalOpen && brandIdOptions.length > 0 ? (
        <div id="addProductModal" className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog" style={{ maxWidth: '80%' }}>
            <div className="modal-content">
              <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                <CreateProduct
                  name={name}
                  description={description}
                  image_url={image_url}
                  price={price}
                  brandName={brandName}
                  logo_url={logo_url}
                  brandId={brandId}
                  onInputChange={onInputChange}
                  productSubmit={productSubmit}
                  onClose={closeAddProductModal}
                  brandIdOptions={brandIdOptions}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isEditProductModalOpen && brandIdOptions.length > 0 ? (
        <div id="editProductModal" className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog" style={{ maxWidth: '80%' }}>
            <div className="modal-content">
              <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                <UpdateProduct
                  productId={selectedProduct.id}
                  products={products}
                  onProductChange={handleInputChange}
                  onClose={() => setIsEditProductModalOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}

    </div>
  );
};