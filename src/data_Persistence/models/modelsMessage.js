import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    },
    timestrap:{type: Date, default:Date.now},
})

export default model("messages", messageSchema);