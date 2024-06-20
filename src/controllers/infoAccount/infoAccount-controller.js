import Logger from "../../utils/Log4js.js";
const logger = Logger.loggerCustom;

import usersDaoMongoDb from "../../data_Persistence/daos/users/usersDaoMongoDb.js";

const getInfoAccount = async(req, res) =>{
    try {
        let user = new usersDaoMongoDb();

        let userSession = req.session.user;

        const allUsers = await user.getAll();
        user = allUsers.find( user => user.username === userSession );

        res.status(200).json({ UserDates: user })

    } catch (error) {
        logger.error({error})
    }

}

export default getInfoAccount;
