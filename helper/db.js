const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie_user:abcd1234@ds217138.mlab.com:17138/movie-api',{  useNewUrlParser: true});
    mongoose.connection.on('open', () => {
        //console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;

};