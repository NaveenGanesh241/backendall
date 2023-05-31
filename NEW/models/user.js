const{Schema, SchemaTypes, model} = require('mongoose');

const userschema = new Schema({
    empname:SchemaTypes.String,
    password:SchemaTypes.String
});
const employ =model('employ',userschema);
module.exports=employ