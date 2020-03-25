const express = require('express')
const app = express()
const mongoose = require('mongoose')

async function connectToDb() {
  const connection = await mongoose.connect('mongodb://authdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('connection to db working'))
}

connectToDb()

app.get('/', (req, res) => {
  res.send('auth')
})

app.listen(4000, () => console.log('Auth service listening on port 4000'))
