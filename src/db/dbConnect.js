// Conexões com o banco Mongo nessa pasta

import mongoose from "mongoose";
import 'dotenv/config'

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;


export default mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.gpanl5k.mongodb.net/drip_store_api?retryWrites=true&w=majority`)
.then(()=> 
console.log("bd conectado com success"))
.catch(error => console.log(`erro ao conectar no banco: ${error}`))

