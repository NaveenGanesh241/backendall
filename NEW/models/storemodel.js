const{Schema, SchemaTypes, model} = require('mongoose');

const storeschema = new Schema({
    storename:SchemaTypes.String,
    location:SchemaTypes.String,
    type:SchemaTypes.String,
    ownby:SchemaTypes.String
    
});
const store = model('store',storeschema);
module.exports = store