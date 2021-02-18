// const users = require('../mocks/users.json')
// const plans = require('../mocks/plans.json')
// const subscriptions = require('../mocks/subscriptions.json')




const usersController = require('./controllers/users');

function routes(app) {
    app.post('/user', usersController.createUser);
    app.get('/user', usersController.getUsers);
    app.get('/user/:id', usersController.getUser);

}

module.exports = routes;
