const {Schema, model} = require('mongoose');

const UsersSchema = new Schema({
  firstName: String,
  lastName: String,
  emailID: String,
  phoneNumber: String,
  subscriptionID: String
});

const UsersModel = model('Users', UsersSchema);
module.exports = UsersModel;
