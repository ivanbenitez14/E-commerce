import ecommerceAPI from "../api/ecommerceApi";

export const useEcommStore = () => {

    const startSettingProducts = async({ name, description, image_url, price, brandName, logo_url, brandId }) => {
        try {
            const resp = await ecommerceAPI.post('/product/createProduct', {
                name,
                description,
                image_url,
                price,
                brandName,
                logo_url,
                brandId
            });
            return resp;          
        } catch (error) {
            console.log(error);
        }
    };

    const startGettingProducts = async (name, description) => {
        try {
          const params = {};
      
          if (name) {
            params.name = name;
          }
      
          if (description) {
            params.description = description;
          }
      
          const resp = await ecommerceAPI.get('/product/getProducts', {
            params: params,
          });
      
          const products = resp.data.products;
          return products;
        } catch (error) {
          console.log(error);
        }
    };      

    const startGettingProductById = async({id}) => {
        try {
            const resp = await ecommerceAPI.get(`/product/getProduct/${id}`);
            const product = resp.data.products;
            return product;          
        } catch (error) {
            console.log(error);
        }
    };

    const startGettingBrands = async() => {
        try {
            const resp = await ecommerceAPI.get(`/brand/getBrand`);
            console.log(resp);
            return resp;          
        } catch (error) {
            console.log(error);
        }
    };

    const startUpdatingProducts = async (id, productData) => {
        try {
            const resp = await ecommerceAPI.put(`/product/updateProduct/${id}`, productData);
            console.log(resp);
            return resp;          
        } catch (error) {
            console.log(error);
        }
    };      

    const startDeletingProducts = async(id) => {
        try {
            const resp = await ecommerceAPI.delete(`/product/deleteProduct/${id}`);
            return resp;          
        } catch (error) {
            console.log(error);
        }
    };

    return {
        // METODOS
        startSettingProducts,
        startGettingProducts,
        startGettingProductById,
        startGettingBrands,
        startUpdatingProducts,
        startDeletingProducts
    }
}