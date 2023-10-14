/* eslint-disable react/prop-types */

export const Filters = () => {
    return (
      <div className="col-md-3 mt-4" style={{ height: '100vh' }}>
        <div className="card" style={{ height: '100vh' }}>
          <div className="card-header">Filtros</div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="nameFilter">Nombre:</label>
              <input
                type="text"
                id="nameFilter"
                className="form-control"
                //value={name}
                //onChange={(e) => onSearch(e.target.value, description)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="descriptionFilter">Descripción:</label>
              <input
                type="text"
                id="descriptionFilter"
                className="form-control"
                //value={description}
                //onChange={(e) => onSearch(name, e.target.value)}
              />
            </div>
            <button
              //onClick={onSearch}
              className="btn btn-primary"
              style={{ marginTop: '10px' }}
            >
              <span>Buscar</span>
            </button>
          </div>
        </div>
      </div>
    );
  };  