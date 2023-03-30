const mongoose = require("mongoose");

const dbConnect = mongoose.connect(process.env.MONGO_URL, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log(`Database connected successfully`);
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log('All things are satisfied');
})

module.exports = dbConnect;
