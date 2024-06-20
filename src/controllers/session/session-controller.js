import User from "../../data_Persistence/daos/users/usersDaoMongoDb.js";
import { hashSync, genSaltSync } from 'bcrypt';
import generateToken from "../../middleware/jsonWebToken.js";
const users = new User();
import Logger from "../../utils/Log4js.js";
const logger = Logger.loggerCustom;


function createHash(password) {
    return hashSync(
              password,
              genSaltSync(10),
              null);
}

const registerUser = async(req, res) =>{
    try{
        const {username, password} = req.body

        const allUsers = await users.getAll();
        let user = allUsers.find(u => u.username === username)    
        if (user) {
            info('User already exists');
            return res.status(400).json({erro:"User already exists" })
        }

        const {name, adress, age, phone,email, avatar} = req.body;
        
        const newUser = {
            id: allUsers.length + 1,
            username: username,
            password: createHash(password),
            name: name,
            adress:adress,
            age: age,
            phone: phone,
            email: email,
            avatar:avatar
        }
        users.save(newUser);

        const usuario = {username, password}

        const access_token = generateToken(usuario)

        req.headers.authorization = access_token;

        res.json({ access_token })
    }catch(error){
        logger.error(error)
    }
}

const loginUser = async(req, res)=>{
    try{
        const {username, password } = req.body

        console.log(req.body);
        
        req.session.user = username;

        const allUsers = await users.getAll();
        let user = allUsers.find( user => user.username === username ) 

        if (!user) {
        return res.json({ error: 'credenciales invalidas' });
        }

        const usuario = {username, password}

        const access_token = generateToken(usuario)

        req.session.authorization = access_token;

        res.json({ access_token })
    }catch(error){
        logger.error(error)
    }
}

export default {registerUser, loginUser};