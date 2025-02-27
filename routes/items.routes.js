import { Router } from "express";
import { getItem, getItems } from "../controllers/items.controllers.js";

const router = Router();

router.get("/items", getItems);
router.get("/items/:id", getItem);

export default router;