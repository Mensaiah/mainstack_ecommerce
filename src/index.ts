import router from "./routes";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
import "./startup-lib";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.all("*", (req, res) => res.status(404).json({ data: "Route not found" }));

app.use((err, req, res, next) => {
    console.log("Error", err);
    next(err);
    return res.status(500).json({ error: "An error occured" });
});
const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at ${PORT}`);
});
