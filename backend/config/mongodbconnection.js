const mongoose = require('mongoose');

const URI = 'mongodb+srv://origentattoostudio:o6igOv6nzRKr4lIH@cluster.yxblfnj.mongodb.net/OrigenTattooStudio?retryWrites=true&w=majority';

mongoose.connect(URI, {useNewUrlParser: true});
module.exports = mongoose;
