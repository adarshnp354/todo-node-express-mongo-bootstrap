
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/tododb',{useNewUrlParser:true,useUnifiedTopology:true},(conn)=>{
    console.log("Sucessfully Connected To DB");
})

const schema = mongoose.Schema
var todoschema = new schema({
    task:String
},{strict:true})


var todostuct = mongoose.model('todo',todoschema)
module.exports=todostuct