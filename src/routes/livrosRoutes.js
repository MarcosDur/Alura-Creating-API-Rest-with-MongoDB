import express from "express";
import { getLivro } from "../controllers/livrosController.js";
import livroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", livroController.listarLivros);