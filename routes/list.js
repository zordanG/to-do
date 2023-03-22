import express from 'express';
import { getList, addListItem, updateListItem, deleteListItem } from '../controllers/list.js';

const router = express.Router();

router.get("/", getList);
router.post("/", addListItem);
router.patch("/:id", updateListItem);
router.delete("/:id", deleteListItem);

export default router;