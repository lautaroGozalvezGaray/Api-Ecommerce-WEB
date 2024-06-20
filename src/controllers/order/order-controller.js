import CartDaoMongoDb from "../../data_Persistence/daos/cart/cartDaoMongoDb.js";
import OrdersDaoMongoDb from "../../data_Persistence/daos/order/ordersDaoMongoDd.js";
import UsersDaoMongoDb from "../../data_Persistence/daos/users/usersDaoMongoDb.js";
import nodemailer from "../../utils/nodemailer.js";
const { sendEmail } = nodemailer;

const carrito = new CartDaoMongoDb();
const order = new OrdersDaoMongoDb();
const user = new UsersDaoMongoDb();

const sendOrder = async(req, res) =>{

    const userSession = req.session.user

    //traigo el user
    const allUsers = await user.getAll();
    let userDates = allUsers.find( user => user.username === userSession ) 

    //traigo el carrito de user
    const cart = await carrito.getByUsername(userSession);

    if(cart.products.length>0){

        const productsInCart = cart.products;

        numberOfOrders = await order.getAll();

        let total = 0;

        const status = "Generada"

        for (let i = 0; i < productsInCart.length; i++) {
            total += productsInCart[i].price;
        }

        const generateOrder = {
            items: productsInCart,
            orderNumber: numberOfOrders.length,
            status: status,
            email: userDates.email,
            total: total
        }

        order.save(generateOrder);
        
        sendEmail(generateOrder);

        const idCart = cart.id;

        await carrito.deleteById(idCart)

        res.status(200).json({
            message : "Order sent successfully",
            order: generateOrder
        })

    }else{
        res.status(404).json({messagge : "no products added to cart"})
    }

}

export default {sendOrder}