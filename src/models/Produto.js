//em Models fica a Classe que havera na tabela ou collection as propriedades do Produto

import mongoose from "mongoose";

export const Produto = mongoose.model('Produto', {
    nome: String,
    genero: String,
    tipo: String,
    preco: Number,
   desconto: Number
}, )