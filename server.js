import express from "express";
import routes from "./routes.js";
import db from "./db.js";

const app = express();

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));