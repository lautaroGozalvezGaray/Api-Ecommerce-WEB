import MongoDbContainer from "../../container/mongoDbContainer.js";
import Products from "../../models/modelsProducts.js";

export default class ProductsDaoMongoDb extends MongoDbContainer{
    constructor(){
        super(Products)
    }
}