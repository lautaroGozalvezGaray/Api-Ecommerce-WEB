import express from "express";
import getInfoAccount from "../../controllers/infoAccount/infoAccount-controller.js";
import { auth } from "../../middleware/authJwt.js";

const routerinfoAccount = express.Router();

//MUESTRA TODA LA INFORMACION DEL USUARIO DE LA CUENTA
routerinfoAccount.get("/infoAccount",auth, getInfoAccount)


export default routerinfoAccount;