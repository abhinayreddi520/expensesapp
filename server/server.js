const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'..','public');
const port = process.env || 3000;

app.use(express.static(publicPath));
app.get('*',(req,res)=>{
     res.sendFile(path.join(publicPath,'public'));
});
app.listen(port,()=>{
    console.log('server is up on port 3000');
})