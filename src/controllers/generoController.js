import moment from "moment";
import { Genero } from "../models/Genero.js";

class GeneroController {
    static criar = async(req, res)=> {
        const {nome, codigo} = req.body;
        const genero = {nome, codigo}

        const generoNovo = await Genero.create(genero);
        res.status(201).json({
            data:generoNovo,
            msg:"Novo genero adicionado"
        });
    }

    static buscarTodos = async(req, res) => {
        const generos = await Genero.find()

        res.status(200).json(generos);
            // if( == 0){
            //     .status(404).json("Não ha nenhum genero")
            // return
            // }
    }

    static buscarPorId = async(req, res)=> {
        const id = req.params.id
        if(!id){
            res.status(422).json('por favor informar ID')
            return
        }
        const genero = await Genero.findById(id)
        res.status(200).json(genero)
    }

    static atualizar = async(req, res) =>{
        const id = req.params.id
        const {nome, codigo} = req.body;
        const genero = {nome, codigo}

        const generoAtualizado = await Genero.updateOne({_id: id}, genero);
        res.status(200).json({
            data:generoAtualizado._update,
            msg: `O ${genero.nome} foi atualizado`
        })
    }

    static delete = async (req, res) => {
        const id = req.params.id 

        const generoDeletado = await Genero.findById(id);
        await Genero.deleteOne({_id: id});
        console.log('deleteGenero', generoDeletado)

        // usando o moment com a hora e data da deleção
            let date = moment(new Date()).format('DD/MM/YYYY hh:mm:ss')
            res.status(200).json({
                msg: `O genero ${generoDeletado.nome} foi deletado as ${date}`
            })
    }






}

export default GeneroController;