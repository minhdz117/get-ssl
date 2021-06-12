const express=require('express')
const app=express()

app.set('views','/views')
app.set('view engine','ejs')

var text={"hello.txt":`0B0C156080E9F88D4E048B2AA93C8ED3B59BA060FF5004B064314C12341EB579
comodoca.com
8437dcc21dd3cef`};
app.get('/.well-known/pki-validation/840FFF573D8DCC62041AF9E0C85FBA6C.txt',function(req,res){
    res.set({"Content-Disposition":"attachment; filename=\"840FFF573D8DCC62041AF9E0C85FBA6C.txt\""});
    res.send(text['hello.txt']);
});
app.listen(3000)