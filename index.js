import express from "express";
import listRoutes from "./routes/list";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/list", listRoutes);

app.listen(8800);