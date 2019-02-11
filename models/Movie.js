const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
   director_id: Schema.Types.ObjectId,
   title:{
     type: String,
     required: [true, '`{PATH}` alanı zorunludur'],
     maxlength: [10, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) değerinden fazla olamaz '],
     minlength: [2, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) değerinden az olamaz ']
   },
   category: {
       type: String,
       maxlength: [30,'`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) değerinden fazla olamaz '],
       minlength: [5, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) değerinden az olamaz ']
   },
   country: {
       type: String,
       maxlength: [30,'`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) değerinden fazla olamaz '],
       minlength: [5, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) değerinden az olamaz ']
   },
   year: {
       type: Number,
       maxlength: 2040,
       minlength: 1900
   },
   imdb_score: {
       type: Number,
       maxlength:10,
       minlength:0
   },
   createdAt:{
       type:Date,
       default: Date.now
   }
});

module.exports = mongoose.model('movie', MovieSchema);