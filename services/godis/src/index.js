const express = require('express')
const app = express()
const mariadb = require('mariadb')

const pool = mariadb.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: 'godisdb'
})

pool.getConnection()
  .then(conn => {
    console.log('connection to godisdb is working')
    conn.release()
  })
  .catch(err => console.log(err))

app.get('/godisapi', (req, res) => {
  res.send('godis')
})

app.listen(5000, () => console.log('Godislager listening on port 5000'))
