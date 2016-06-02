var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
  owner_username: {
    type: String
  },
  owner_username_lower: {
    type: String
  },
  game_info: Object,
  attendants: Array,
  maxAttendants: Number,
  address: String,
  coords: Object,
  date: String,
  description: String
}, {collection:'parties'});


module.exports = UserSchema;
