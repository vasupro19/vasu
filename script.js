
var one=document.getElementById("one");
var all=document.getElementById("all")
var dis=document.getElementById("display")
one.addEventListener("click",function()
{
   
    var input=document.createElement("input");
    var button=document.createElement("button");
    button.innerText="Search";
    dis.appendChild(input);
    dis.appendChild(button);
    button.addEventListener("click",function()
    {
        var Request=new XMLHttpRequest();
        //using query parameters to send input data on server file
        Request.open("get",`/read?pname=${input.value}`,);
        Request.send();
        Request.addEventListener(function(data)
        {
            console.log(Request.responseText);
            var arr=JSON.parse(Request.responseText);
            //we can append this array to our ui to display product
        })
    })

})
//same goes with all products to display
one.addEventListener("click",function()
{
    var Request=new XMLHttpRequest();
        //using query parameters to send input data on server file
        Request.open("get","/readall",);
        Request.send();
        Request.addEventListener(function(data)
        {
            console.log(Request.responseText);
            //we parse the string data recieved from the server
            var arr=JSON.parse(Request.responseText);
            //we can append this array to our ui to display product
        })
    
})
// update and delete request can be sent in the same way so we can update our db acordingly;