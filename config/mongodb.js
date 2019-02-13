//Import the mongoose module
const mongoose = require('mongoose')
// For mockgoose
//const Mockgoose = require('mockgoose').Mockgoose;
//const mockgoose = new Mockgoose(mongoose);
var mongoDB = `mongodb://${process.env.MONGODB_URL}/${process.env.MONGODB_DATABASE}`;


// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
//Set up default mongoose connection
console.log('test', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'test') {
  console.log('test DB connected');
  mockgoose.prepareStorage().then(function () {
    mongoose.connect(mongoDB)
  });
  var db = mongoose.connection;
  db.on('success', console.error.bind(console, 'MongoDB Test connection :'));

  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB Test connection error:'));


} else {
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });

  var db = mongoose.connection;

  db.once('open', function () {
    console.log('mongodb connected')
  });


  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
module.exports = db;