/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useEcommStore } from '../../hooks/useEcommStore';

export const UpdateProduct = ({ productId, onClose, products }) => {
    const { startUpdatingProducts } = useEcommStore();
    const productToEdit = products.find((product) => product.id === productId);

    const handleInputChange = (property, value) => {
        setProductFields({
            ...productFields,
            [property]: value,
        });
    };

    const handleUpdateProduct = async (event) => {
        event.preventDefault();
        try {
            await startUpdatingProducts(productId, {
                name: productFields.name,
                description: productFields.description,
                image_url: productFields.image_url,
                price: productFields.price,
                brandName: productFields.brandName,
                logo_url: productFields.logo_url,
                brandId: productFields.brandId,
            });
            onClose();
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    const [productFields, setProductFields] = useState({
        name: productToEdit?.name || '',
        description: productToEdit?.description || '',
        image_url: productToEdit?.image_url || '',
        price: productToEdit?.price || '',
        brandName: productToEdit?.brands?.name || '',
        logo_url: productToEdit?.brands?.logo_url || '',
        brandId: productToEdit?.brands?.id || '',
    }); 

    return (
        <form onSubmit={handleUpdateProduct}>
            <div className="form-group">
                <label htmlFor="name">Nombre del producto</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={productFields.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <textarea
                    id="description"
                    name="description"
                    value={productFields.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="form-control"
                    required
                ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="image_url">URL de la imagen</label>
                <input
                    type="text"
                    id="image_url"
                    name="image_url"
                    value={productFields.image_url}
                    onChange={(e) => handleInputChange("image_url", e.target.value)}
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="price">Precio</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={productFields.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="brandName">Nombre de la marca</label>
                <input
                    type="text"
                    id="brandName"
                    name="brandName"
                    value={productFields.brandName}
                    onChange={(e) => handleInputChange("brandName", e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="logo_url">URL del logo de la marca</label>
                <input
                    type="text"
                    id="logo_url"
                    name="logo_url"
                    value={productFields.logo_url}
                    onChange={(e) => handleInputChange("logo_url", e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="brandId">ID de la marca (opcional)</label>
                <input
                    type="number"
                    id="brandId"
                    name="brandId"
                    value={productFields.brandId}
                    onChange={(e) => handleInputChange("brandId", e.target.value)}
                    className="form-control"
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Actualizar Producto
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cerrar
            </button>
        </form>
    );
};