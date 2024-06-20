import { Schema, model } from "mongoose";
const userSchema = new Schema({
    username: {
        type: Object,
        required: [true, 'El username es obligatorio'],
    },
    password: {
        type: Object,
        required: [true, 'El password es obligatorio'],
    },
    name:{
        type: String,
        required: [true, 'El name es obligatorio'],
    },
    adress:{
        type: Object,
        required: [true, 'El adress es obligatorio'],
    },
    age:{
        type: Number,
        required: [true, 'El age es obligatorio'],
    },
    phone:{
        type:Number,
        required: [true, 'El phone es obligatorio'],
    },
    email:{
        type: String
    },
    avatar:{
        type:Object,
        
    }
})

export default model("users", userSchema);