const express = require('express')
const app = express()

const { Client } = require('pg')

const db = new Client({
  user: 'root',
  password: 'example',
  host: 'godisdb'
})

async function connectToDb() {
  try {
    const connection = await db.connect()
      .then(db => console.log('connection to godisdb working'))

    db.end()

  } catch(error) {
    console.log(error)
  }
}

connectToDb()

app.get('/godisapi', (req, res) => {
  res.send('godis')
})

app.listen(5000, () => console.log('Godislager listening on port 5000'))
