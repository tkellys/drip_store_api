// Getting start hellow Word - site que pegou esse exemp abaixo: 

import express from 'express'
import './src/db/dbConnect.js'
import app from './src/app.js'

const PORT = 5000
const HOST = "localhost"


app.get('/', (req, res) => {
  res.send('Hello World! Servidor ta ON ')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`)
})