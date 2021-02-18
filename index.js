const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = 4000

const app = express();
const router = express.Router();


const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

const { DB_USER, DB_PASSWORD, DB_CLUSTER, DB_NAME} = process.env
const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`;

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// //error handling
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
//   next();
// });

app.use('/api', router);

routes(app);

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('connected to mongo');
  app.listen(PORT, () => {
    console.log(`Server live on http://localhost:${PORT}`)
  })
}).catch((err) => {
  console.log('error: ' + err)
}
)



