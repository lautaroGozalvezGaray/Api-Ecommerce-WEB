import express from "express";
import { auth } from "../../middleware/authJwt.js";
import orderController from "../../controllers/order/order-controller.js";
const { sendOrder } = orderController;

const routerOrder = express.Router();

//PARA CONFIRMAR LA ORDEN Y MANDAR EL EMAIL Y EL WAHTSAPP

routerOrder.post("/send-order", auth, sendOrder);


export default routerOrder;