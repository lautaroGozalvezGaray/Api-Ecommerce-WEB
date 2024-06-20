import log4js from "../../utils/Log4js.js";
const logger = log4js.loggerCustom;
import mongoose from 'mongoose';
const { connect: _connect, set } = mongoose; 
import minimist from "minimist";
import dotenv from 'dotenv';
dotenv.config();



export default class MongoDbContainer{
    constructor(model){
        this.model=model;
        this.connect();
    }

    async connect(){
        try {
            const options = {
                alias: {
                    "b": "BASE"
                },
                default: {
                    "BASE": process.env.MONGO_URL_DB
                }
            };
    
            const { BASE } = minimist(process.argv.slice(3), options);
            set('strictQuery', false);
    
            await _connect(BASE);
        
            logger.info("base de datos conectada")
        } catch (error) {
            logger.error('Error a la hora de iniciar la base de datos');
        }
        
    }

    async exists(id) {
        try {
            return await this.model.findById(id);
        } catch (error) {
            logger.error(error)
        }
    }

    async getAll() {
        try {
            
            return await this.model.find();
        } catch (error) {
            logger.error(error)
            return false;
        }
    }

    async getById(objectId) {
        try {
            const product = await this.model.findOne({
                _id : objectId
            })
            return product;
        } catch (error) {
            logger.error(error)
            return false;
        }
    }

    async getByUsername(objectUser) {
        try {
            const product = await this.model.findOne({
                user : objectUser
            })
            return product;
        } catch (error) {
            logger.error(error)
            return false;
        }
    }
    
    async save(object) {
        try {
            return await this.model.create(object)
        } catch (error) {
            logger.error(error)
            return false;
        }
    }

    async deleteById(id) {
        try {
            return await this.model.findByIdAndDelete({_id: id})
        } catch (error) {
            logger.error(error)
            return false;
        }
    }

    async updateById(id, data){
        try {
            return await this.model.updateOne({_id:id}, {$set:data});
        } catch (error) {
            logger.error(error)
        }
    }

}