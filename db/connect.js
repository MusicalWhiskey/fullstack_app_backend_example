import mongoose from "mongoose";

export async function connect() {
    try {
        const conn = await mongoose.connect(process.env.ATLAS_URI);
        console.log(`MongoDB Connected: ${conn.connection[0].name} = objectToDestruct}`);
    } catch (e) {
        console.error(e);
    }
}