import express from "express"
import GeneroController from "../controllers/generoController.js"

const routerGeneros = express.Router();

routerGeneros
    .get('/generos', GeneroController.buscarTodos)
    .get('/genero/:id', GeneroController.buscarPorId)
    .post('/genero', GeneroController.criar)
    .put('/genero/:id', GeneroController.atualizar)
    .delete('/genero/:id', GeneroController.delete)
    

export default routerGeneros;
