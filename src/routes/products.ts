import { Router } from "express";
import "express-async-errors";
const router = Router();
import ProductController from "../app/Products/ProductControllers";

router.post("/", ProductController.create);
router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getById);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);

export default router;
