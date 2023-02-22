const mongoose=require("mongoose");
mongoose.set('strictQuery', false);

module.exports=function init(callback)
{
    mongoose.connect("mongodb+srv://vasu_db:vasugrover17@cluster0.bpnhxhm.mongodb.net/VASU?retryWrites=true&w=majority").then(function()
    {
        callback();
    })
    .catch(function()
    {
        callback("error")
    })
}