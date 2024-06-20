import moment from "moment";
import Logger from "../../utils/Log4js.js";
const logger = Logger.loggerCustom;


import CartDaoMongoDb from "../../data_Persistence/daos/cart/cartDaoMongoDb.js";
import ProductsDaoMongoDb from "../../data_Persistence/daos/products/productsDaoMongoDb.js";
import nodemailer from "../../utils/nodemailer.js";
const { sendEmail } = nodemailer;


const carrito = new CartDaoMongoDb();
const product = new ProductsDaoMongoDb();

const createNewCart = async(req, res) =>{
    try {
        
        user= req.session.user

        const {body} = req;

        body.user = user;
        body.timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
        body.products = [];

        const newCart = await carrito.save(body);
        newCart
            ? res.status(200).json({success : "cart added with ID: "+ newCart._id})
            : res.status(404).send(logger.error("There was an error creating the cart"));

        
    } catch (error) {
        return res.status(500).send(logger.error(`${error}`))
    }
}

const deleteCart = async(req, res) =>{
    try {

        user= req.session.user

        const {id} = req.params;

        await carrito.deleteById(id);

        res.status(200).json({mensaje: `Cart whit ID : ${id} was deleted successfully`});

    } catch (error) {
        return res.status(500).send(logger.error(`${error}`))
    }
}

const productsFromCart = async(req, res) =>{
    try {

        user= req.session.user

        const {id} = req.params;
        const cart = await carrito.getById(id);
        
        cart 
        ? res.status(200).json({cart_number: id, "Products ": cart.products ? cart.products : "There aren't products"})
        
        : res.status(404).json(message= `The Cart whit ID: ${id} was not found`);

    } catch (error) {
        return res.status(500).send(logger.error(`${error}`))
    }
}

const addProductToCart = async(req, res) =>{
    try {

        user= req.session.user

        const {id}= req.params;
        const {body} = req;

        const carritoData = await carrito.getById(id);

        const existingProducts = carritoData.products;

        const newProducts = [...existingProducts, body];

        if(newProducts){
            let productAdded = await carrito.updateById(id, { products: newProducts })
            productAdded
            ? res.status(200).json({Success: "Product added"})
            : res.status(404).send(logger.error("there was a problem adding the product"))
    
        }else{
            res.status(404).send(logger.error("the product was not found"));
        }

    } catch (error) {
        return res.status(500).send(logger.error(`${error}`))
    }
}

const deleteProductFromCart = async(req, res) =>{
    try {

        user= req.session.user

        const {id} = req.params;
        const {id_prod} = req.params;
        let deleteProduct = await carrito.deleteProductFromCart(id, id_prod);
        deleteProduct
        ? res.status(200).json({Success: "Product succesfully deleted"})
        : res.status(404).send(logger.error("there was a problem deleting the product"))


    } catch (error) {
        return res.status(500).send(logger.error(`${error}`))
    }
}

export default {createNewCart, deleteCart, productsFromCart, addProductToCart, deleteProductFromCart}