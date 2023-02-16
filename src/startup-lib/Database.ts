import mongoose from "mongoose";

export default async function connectToDatabase() {
    const mongodbUrl = process.env.MONGODB_URL as string;
    console.log("mongodbUrl:", mongodbUrl);

    mongoose.set("debug", true);
    await mongoose.connect(mongodbUrl);

    const db = mongoose.connection;

    db.on("connected", () => {
        console.log("DATABASE CONNECTED");
    });

    db.on("error", (error) => {
        console.error("An error occurred with db", error.message);
    });
}
