//em Models fica a Classe que havera na tabela ou collection as propriedades do Produto

import mongoose from "mongoose";

export const Produto = mongoose.model('Produto', {
    nome: String,
    genero: {
        type: mongoose.Schema.Types.ObjectId,
        //ref é o model Genero, que ele faz parte de produto e aqui tem a relação. 
        ref: 'genero',
        required: true
    },
    tipo: String,
    preco: Number,
   desconto: Number,
   precoComDesconto: Number
}, )