const mongoose=require("mongoose");
const {Schema}=mongoose;
const CategorySchema=new Schema(
    {
        categoryId:
        {
            type:mongoose.Schema.Types.categoryId,
            ref:"Pro"
        },
        categoryName:String
    }
)
const Category=mongoose.model("Cat",CategorySchema)
module.exports=Category;