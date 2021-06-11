const express=require('express')
const app=express()

app.set('views','/views')
app.set('view engine','ejs')

var text={"hello.txt":`9B5CEDE9D7A70F9CF6DB3651184233BEF7CAA655AA87E0003E9EC3D8A838F25F
comodoca.com
4880b3465e032ea`};
app.get('/.well-known/pki-validation/C5AC3D350BAA3333C0F6530D91622AA5.txt',function(req,res){
    res.set({"Content-Disposition":"attachment; filename=\"C5AC3D350BAA3333C0F6530D91622AA5.txt\""});
    res.send(text['hello.txt']);
});
app.listen(3000)