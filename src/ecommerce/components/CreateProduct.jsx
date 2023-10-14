/* eslint-disable react/prop-types */

export const CreateProduct = ({
  name,
  description,
  image_url,
  price,
  brandName,
  logo_url,
  brandId,
  brandIdOptions,
  onInputChange,
  productSubmit,
  onClose
  }) => {

  const isBrandIdProvided = !!brandId;
  const isBrandInfoProvided = !!brandName && !!logo_url;

  const handleBrandIdChange = (e) => {
    onInputChange(e);
  };

  const handleBrandInfoChange = (e) => {
    onInputChange(e);
  };

  return (
    <form onSubmit={productSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre del producto</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={onInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image_url">URL de la imagen</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={image_url}
            onChange={onInputChange}
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
            value={price}
            onChange={onInputChange}
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
            value={brandName}
            onChange={handleBrandInfoChange}
            className="form-control"
            disabled={isBrandIdProvided}
          />
        </div>
        <div className="form-group">
          <label htmlFor="logo_url">URL del logo de la marca</label>
          <input
            type="text"
            id="logo_url"
            name="logo_url"
            value={logo_url}
            onChange={handleBrandInfoChange}
            className="form-control"
            disabled={isBrandIdProvided}
          />
        </div>
        <div className="form-group">
          <label htmlFor="brandId">ID de la marca (opcional)</label>
          <select
            id="brandId"
            name="brandId"
            value={brandId}
            onChange={handleBrandIdChange}
            className="form-control"
            disabled={isBrandInfoProvided}
          >
            <option value="">Selecciona una marca</option>
            {brandIdOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Producto
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Cerrar
        </button>
    </form>
  )
}