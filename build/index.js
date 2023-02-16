"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("./startup-lib");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", routes_1.default);
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
