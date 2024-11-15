import Chat from "../models/chat.js"

export async function fetchAllChats(req, res, next) {
    try {
        const chat = await Chat.find();
        res.json(chat);

    } catch (e) {
        console.error(e);

    }
}