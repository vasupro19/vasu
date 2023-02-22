const express=require('express');

var app=express();
const port=3000;
const dbinit = require("./init")
const Pro=require("./productschema")
const Category=require("./categoryschema");
//middleware
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// app.use(session(
//     {
//         secret: "keyboard cat",
//         resave: false,
//         saveUninitialized: true,
//     }
// ))
//database connection
dbinit(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("DB Connected");
    app.listen(port, () => {
        console.log(`Redirecting To Login http://localhost/create:${port}`)
    })
})
//add products to db using ejs file form post method we can use app.route also
app.get("/create",function(req,res)
{
    res.render(__dirname+"/allejs/index.ejs");
})
//req.body will store everything
app.post("/create",function(req,res)
{
    Pro.create({ProductID:req.body.Id,productname:req.body.na,qtyqtyperunit:req.body.qty,unitprice:req.body.price
        ,unitInstock:req.body.units,discontinued:req.body.dis,categoryId:req.body.ID})
    Category.create({categoryId:req.body.ID,categoryName:req.body,NAME});
})
//search one product in db by clicking read
app.get("/read",function(req,res)
{
    Pro.findOne({ProductID:req.query.pname},{$elemMatch:{ProductID:req.query.pname}}).then(function(data)
    {
        //it will send the searched product to Ui;
        res.send(data);
    })
})
// display all products to UI
app.get("/readll",function(req,res)
{
    Pro.find().then(function(data)
    {
        Category.find().then(function(data1)
        {

    
        if(data[0].categoryId===data1[0].categoryId)
        
          //send all data to the script file in string format it will also send category data;
        res.send(data,data1);
        else
        {
            res.send(data);
        }
    })
    });

})
app.get("/update",function(req,res)
{
    //we can update anything in the db like this by sending request to the server and it will access the value through query parameters
    //and then update one will update the product in db;
    Pro.updateOne({ProductID:req.query.id},{ProductID:req.query.id}).then(function(data)
    {
        res.render(__dirname+"/allejs/index.ejs");
    })
})
app.get("/delete",function(req,res)
{
    //we can delete any product in the db by sending http request to the server and sending query parameters to search in
    // in the db and finally delete in the db
    Pro.deleteOne({ProductID:req.query.id}).then(function(data)
    {
        res.render(__dirname+"/allejs/index.ejs");
    })
})