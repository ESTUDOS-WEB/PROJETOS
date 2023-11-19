import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const porta = process.env.PORTA || 5000;
import usuario from "./Controller/Usuario.mjs";

app.get("/", usuario.get);

app.post("/", usuario.post);

app.put("/", usuario.put);

app.delete("/", usuario.delete);

app.listen(porta, function () {
  console.log(`Servidor esta em execução http://localhost:${porta}/`);
});
