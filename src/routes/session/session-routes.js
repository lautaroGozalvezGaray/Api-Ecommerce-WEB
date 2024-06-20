import { Router } from "express";
import sessionController from "../../controllers/session/session-controller.js";

const { loginUser, registerUser } = sessionController;

const router = Router();

//____________________________________________ login _____________________________________ //

router.post('/login', loginUser)

//____________________________________________ register _____________________________________ //

router.post('/register', registerUser)
//____________________________________ logout _____________________________________ //

router.get('/logout', (req, res) => {
    user = req.session.user
    req.session.destroy(err =>{
        if(err) return  res.status(400).json(message = `Error al cerrar sesion`)
        if(user) return res.status(200).json(message = `Hasta luego ${user}. Vuelvas Prontos`)
        if(!user) return  res.status(400).json(message = `Error al cerrar sesion`)
    })
})


export default router;