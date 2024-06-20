import httpServer from "./app.js";
import minimist from "minimist";
import Logger from "./src/utils/Log4js.js";
const logger = Logger.loggerCustom;



const options = {
    alias: {
        "p": "PORT",
    },
    default: {
        "PORT": process.env.PORT
    }
};

const { PORT } = minimist(process.argv.slice(2), options);
    //listener
httpServer.listen(PORT, () => {
    logger.info(`Server started at http://localhost:${PORT}`);
})



