const{Schema, SchemaTypes, model} = require('mongoose');

const todoschema = new Schema({
    title:SchemaTypes.String,
    description:SchemaTypes.String,
    status:SchemaTypes.Boolean
    
});
const todo = model('todo',todoschema);
module.exports = todo