const express = require('express')
const users = require('./mocks/users.json')
const plans = require('./mocks/plans.json')
const subscriptions = require('./mocks/subscriptions.json')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
  res.send(users)
})
app.get('/plans', (req, res) => {
  res.send(plans)
})
app.get('/subscriptions', (req, res) => {
  res.send(subscriptions)
})
app.post('/subscriptions', (req, res) => {
  console.log(req.body);
  res.send("Addition success" );
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
