import MongoDbContainer from "../../../data_Persistence/container/mongoDbContainer.js";
import Users from "../../../data_Persistence/models/modelsUsers.js";

export default class ProductsDaoMongoDb extends MongoDbContainer{
    constructor(){
        super(Users)
    }
}