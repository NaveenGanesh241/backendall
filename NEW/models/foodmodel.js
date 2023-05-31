const{Schema, SchemaTypes, model} = require('mongoose');

const foodschema = new Schema({
    fooditem:SchemaTypes.String,
    price:SchemaTypes.Number,
    hotelname:SchemaTypes.String
    
});
const food= model('food',foodschema);
module.exports = food