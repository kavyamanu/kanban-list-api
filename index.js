const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routes')
const app = express()
const port = 4000

app.use(bodyParser.json())
routes(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
