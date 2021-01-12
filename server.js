const express = require ('express')
const bcrypt = require ('bcrypt')

const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).send('Server running')
})

app.listen(3000, ()=>{
    console.log('Listening on 3000')
})