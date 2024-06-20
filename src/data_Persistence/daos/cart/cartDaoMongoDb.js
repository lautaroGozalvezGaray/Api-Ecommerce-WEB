import Carts from "../../models/modelsCart.js";
import MongoDbContainer from "../../container/mongoDbContainer.js";


export default class CartDaoMongoDb extends MongoDbContainer{
    constructor(){
        super(Carts)
    }

    async deleteProductFromCart(id, id_prod){
        try {

            let result = false

            const carrito = new CartDaoMongoDb();

            const cart = await carrito.getById(id);

            const productsInCart = cart.products;

            // Encontrar el índice del producto en el carrito
            const index = productsInCart.findIndex(p => p.id == id_prod);

            // Si el producto está en el carrito, eliminarlo y almacenar el producto eliminado
            if (index !== -1) {
                const removedProduct = productsInCart.splice(index, 1)[0];

                result = true
            }

            // Actualizar el carrito en la base de datos
            await carrito.updateById(id, { products: productsInCart });

            return result

        } catch (error) {
            throw new Error(error);
        }
    }
}