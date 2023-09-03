const mongoose = require('mongoose');

const URI = `mongodb+srv://origentattoostudio:o6igOv6nzRKr4lIH@cluster.yxblfnj.mongodb.net/`

mongoose.connect(uri, { useNewUrlParser: true });
module.exports = mongoose;