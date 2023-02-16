import { Router } from "express";

import productRoute from "./products";
import "express-async-errors";
const router = Router();
router.get("/", (req, res) => res.send("Express  Server Running"));

router.use("/products", productRoute);
export default router;
