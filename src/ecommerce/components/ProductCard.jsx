/* eslint-disable react/prop-types */
import { useAuthStore } from "../../hooks/useAuthStore";

export const ProductCard = ({ product, onOpenModal, onEditProduct, onDeleteProduct }) => {
  const { status } = useAuthStore();

  return (
    <div className="col-md-4 mt-4">
      <div className="card">
        <img src={product.image_url} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text"><span>Precio: $</span>{product.price}</p>
          <div className="btn-group">
            <button
              className="btn btn-primary btn-block"
              onClick={() => onOpenModal(product)}
            >
              Ver detalles
            </button>
            {status === 'authenticated' && (
              <>
                <button
                  className="btn btn-warning"
                  onClick={() => onEditProduct(product.id)}
                >
                  <i className="bi bi-pencil"></i>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteProduct(product.id)}
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};