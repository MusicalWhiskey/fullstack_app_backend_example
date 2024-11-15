import mongoose from "mongoose"

const chatSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    messages: [{role: String, content: String}]

}, {timestamps: true})


export default mongoose.model("Chat", chatSchema)