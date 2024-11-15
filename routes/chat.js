import express from "express";
import Chat from "../models/chat.js"

const router = express.Router();


/**
 * Get /api/chat
 * @description Return all chats
 */

router.get('/', async (req, res, next) => {{
    try {
        const chat = await Chat.find();
        res.json(chat);

    } catch (e) {
        console.error(e);
    }
}})

router.get('/:id', (req, res, next) => {
    try {
    const { id } = req.params;
    const chat = await Chat.findById({ id });
    res.json({ chat });
    } catch (e) {
        console.error(e); 
    }
})

app.post('/', async (req,res,next) => { 
    try {
        const newChat = await new Chat ({title: "New Chat", messages: []});
        await newChat.save();
        re.status(201).res.json(newChat);

    } catch (e) {
        console.error(e);
    }
})

export default router;