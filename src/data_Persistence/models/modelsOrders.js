import { Schema, model } from "mongoose";

const Orderschema = new Schema({
    items: [
        {
            type: Object,
            required: [true, 'El items es obligatorio'],
        }
    ],
    orderNumber: {
        type: Number,
        required: [true, 'El orderNumber es obligatorio'],
    },
    timestrap:{
        type: Date
    },
    status:{
        type: String,
        required: [true, 'El status es obligatorio']
    },
    email:{
        type:String,
        required: [true, 'El email es obligatorio']
    },
    total:{
        type: Number,
    },
})

export default model("orders", Orderschema);