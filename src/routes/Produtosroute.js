import express from 'express'
import ProdutoController from "../controllers/produtoController.js"

const routerProdutos = express.Router();

routerProdutos
    .get('/produtos', ProdutoController.buscarTodos)
    .get('/produto/:id', ProdutoController.buscarPorId)
    .post('/produto', ProdutoController.criar)
    .put('/produto/:id', ProdutoController.atualizar)
    .delete('/produto/:id', ProdutoController.deletar)

export default routerProdutos;