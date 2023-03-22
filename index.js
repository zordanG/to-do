import express from "express";
import cors from "cors";
import listRoutes from "./routes/list.js";

const port = 8800;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/kanban",(req, res, next) => {
    res.status(200).send({mensagem: 'Deu certo'})
})

app.use("/list", listRoutes);

app.use("/",(req, res, next) => {
    res.status(200).send({mensagem: 'Conectado'})
})


app.listen(port);