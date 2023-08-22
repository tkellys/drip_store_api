// Getting start hellow Word - site que pegou esse exemp abaixo: 

import express from 'express'
import './src/db/dbConnect.js'
import app from './src/app.js'
import cors from 'cors'



const PORT = 5000
const HOST = "localhost"




app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`)
})