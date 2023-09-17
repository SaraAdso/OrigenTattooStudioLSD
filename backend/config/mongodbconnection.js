const mongoose = require('mongoose');
require('dotenv').config();
const URI = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@cluster.yxblfnj.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority`;

mongoose.connect(URI, {useNewUrlParser: true});
module.exports = mongoose;
