const express = require('express')
const app =express()
const port=3000
app.use(express.json())


app.get('/',(req,res)=>res.status(200).json({messege:"welcome"}))

app.listen(port,(()=>console.log(`Listening on ${port}`)))

const db=reqire('.config/db')

