const UsersModel = require('../models/users');

exports.createUser = function (req, res) {
    const { firstName, lastName, emailID, phoneNumber, subscriptionID } = req.body;

    UsersModel.create({
        firstName, lastName, emailID, phoneNumber, subscriptionID
    }, function (err, user) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json(user)
    })
}

exports.getUsers = function (req, res) {
    UsersModel.find({}, function (err, users) {
        if (err) {
            console.log(err);
            return res.json({
                error: err
            })
        }
        res.json(users)
    })
}

exports.getUser = function (req, res) {
    UsersModel.findById(req.params.id, function (err, user) {
        if (err) {
            return res.json({
                error: err
            })
        }
        res.json(user)
    })
}
