const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')

const app = express()

app.use('/public', express.static('./public'))

//body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(router)
app.use((req, res) => {
  res.send('Page not Found 404')
})

app.listen(4000, function () {
  console.log('server is running')
})

