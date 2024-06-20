import MongoDbContainer from "../../../data_Persistence/container/mongoDbContainer.js";
import Order from "../../../data_Persistence/models/modelsOrders.js";

export default class ProductsDaoMongoDb extends MongoDbContainer{
    constructor(){
        super(Order)
    }
}