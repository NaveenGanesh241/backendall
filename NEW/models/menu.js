const{Schema, SchemaTypes, model} = require('mongoose');

const menuschema = new Schema({
    fooditem:SchemaTypes.String,
    price:SchemaTypes.Number,
    available:SchemaTypes.String,
    chefname:SchemaTypes.String
    
});
const hotel = model('hotel',menuschema);
module.exports = hotel