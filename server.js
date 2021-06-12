const express=require('express')
const app=express()

app.set('views','/views')
app.set('view engine','ejs')

var text={"hello.txt":`DFE8F6EA2BC50A4CAC6AE07BE2CF33FCF1F816A2BCEC6461290049AEF1C1DC6B
comodoca.com
d023f29b4d3d1be`};
app.get('/.well-known/pki-validation/840FFF573D8DCC62041AF9E0C85FBA6C.txt',function(req,res){
    res.set({"Content-Disposition":"attachment; filename=\"840FFF573D8DCC62041AF9E0C85FBA6C.txt\""});
    res.send(text['hello.txt']);
});
app.listen(3000)