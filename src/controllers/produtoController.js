// aqui ficam as REGRAS de negocio -> if / elses e metodos funçoes
import moment from "moment/moment.js";
import  {Produto}  from "../models/Produto.js"


class ProdutoController {
    static criar = async(req, res) => {
        // transformar o body em obj produto para ser salvo no banco
        const { nome, genero, tipo, preco, desconto } = req.body;
        const produto = { nome, genero, tipo, preco, desconto }

        //populate é para produto herdar os objetos de genero
        const produtoNovo = (await Produto.create(produto)).populate('genero')
        res.status(201).json({
            data:produtoNovo,
            msg:"Produto novo foi Criado." 
        });
    

        // Object.keys(produto).forEach((key) => {
        //     if(!produto[key]){
        //         res.status(404).json(`O campo ${key}, é vazio`)
        //         return
        //     }
            
        // })


    }

    static buscarTodos = async(req, res) => {
        // find() metodo que busca todos
        const produtos = await Produto.find().populate('genero')
      
        res.status(200).json(produtos);
     
        if (produtos.length == 0){
            res.status(404).json({message:'Não ha produtos'})
            
            return
        }
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

    /*
    Produto._updateOne({}), produto) _> sem o await não EFETIVA a atualização, sendo necessario
    usar com AWAIT
    - await Produto.updateOne({_id: id}, produto); ->
    com o await ele retorna o obj que confirma se o que foi enviado foi atualizado, no
    caso, a propriedade matchedCount. Obje completo abaixo:

    {
        acknowLedged:true,
        modifiedCount:0,
        upsertedId: null,
        upsertedCount:0,
        matchedCount:1
    }
    usando o await o obj atualizado nao e retornado no response. 
    */
    static atualizar = async(req, res) => {
        const id = req.params.id
        const { nome, genero, tipo, preco, desconto } = req.body;
        const produto = { nome, genero, tipo, preco, desconto }

        const produtoAtualizado = await Produto.updateOne({ _id: id }, produto);
        console.log('updateProduto', produtoAtualizado);

        res.status(200).json({
            data: produtoAtualizado._update,
            msg:`Seu Produto ${produto.nome} esta atualizado`
        })
        
    }

    static deletar = async (req, res) => {
        const id = req.params.id
       
        const produtoDeletado = await Produto.findByIdAndDelete(id);
        console.log('deleteProduto', produtoDeletado)

        let date = moment(new Date()).format('DD/MM/YYYY hh:mm:ss')
        res.status(200).json({
            data: produtoDeletado,
            msg:`O Produto foi deletado as ${date}`

        })
    }
  
}
export default ProdutoController;
