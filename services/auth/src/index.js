const express = require('express')
const app = express()
const mongoose = require('mongoose')

async function connectToDb() {
  const connection = await mongoose.connect('mongodb://authdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD
  })
    .then(() => console.log('connection to db working'))
}

connectToDb()

app.get('/', (req, res) => {
  res.send('auth')
})

app.listen(4000, () => console.log('Auth service listening on port 4000'))
