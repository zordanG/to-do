import express from 'express';
import { getList, addListItem, updateListItem, deleteListItem } from '../controllers/list';

const router = express.Router();

router.get("/list", getList);
router.post("/list", addListItem);
router.put("/list/:id", updateListItem);
router.delete("/list/:id", deleteListItem);

export default router;