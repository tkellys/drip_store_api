// aqui eu vou colocar minhas rotas para serem chamadas pelo arquivo 
// app que é onde fica centralizado todos os caminhos.

import routerProdutos from "./Produtosroute.js";
import express from "express";


const routes = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello World! Servidor ta ON ')
    })

    app.use(express.json(),
        routerProdutos
    );
};
export default routes;