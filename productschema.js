const mongoose=require("mongoose");
const {Schema}=mongoose;
const ProductSchema=new Schema(
    {
        ProductID:Number,
        productname:String,
        qtyperunit:Number,
        unitprice:Number,
        unitInstock:Number,
        discontinued:Boolean,
        categoryId:Number
    }
)
const Pro=mongoose.model("Intern",ProductSchema)
module.exports=Pro;