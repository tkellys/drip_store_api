// Conexões com o banco Mongo nessa pasta

import mongoose from "mongoose";
import 'dotenv/config'


const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

    export default mongoose
    .connect(
            `mongodb://${DB_USER}:${DB_PASS}@ac-c1qtwmg-shard-00-00.gpanl5k.mongodb.net:27017,ac-c1qtwmg-shard-00-01.gpanl5k.mongodb.net:27017,ac-c1qtwmg-shard-00-02.gpanl5k.mongodb.net:27017/drip_store_api?ssl=true&replicaSet=atlas-bl6ow0-shard-0&authSource=admin&retryWrites=true&w=majority`)
        
            /* forma que funciona em versao mais atualizada (notebook do curso) no meu notebook so funciona na versar 2.222 do Monfo
        `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.gpanl5k.mongodb.net/drip_store_api?retryWrites=true&w=majority`
        */ 
    
    .then(()=> {
    console.log("bd conectado com success")
    })
    
    .catch(error => console.log(`erro ao conectar no banco: ${error}`))



