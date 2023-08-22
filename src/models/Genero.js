import mongoose from "mongoose";

const generoSchema = new mongoose.Schema(
    {
   nome: {type: String, required: true },
   codigo: {
      type: Number,
      unique: true,
      required: true
   }
}
)

const Genero = mongoose.model('genero', generoSchema)

export{Genero, generoSchema}