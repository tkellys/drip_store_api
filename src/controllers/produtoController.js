// aqui ficam as REGRAS de negocio -> if / elses
import  {Produto}  from "../models/produto.js"

class ProdutoController {
    static criar = async(req, res) => {

    }

    static buscarTodos = async(req, res) => {
        // find() metodo que busca todos
        const produtos = await Produto.find()
        res.status(200).json(produtos)
    }

    static buscarPorId = async(req, res) => {
        const id = req.params.id
        if(!id){
            res.status(422).json('id nao informado')
            return
        }
        const produto = await Produto.findById(id)
        res.status(200).json(produto)

    }
    static atualizar = async(req, res) => {

    }

    static deletar = async (req, res) => {

    }
}