const express = require('express');
const app = express();
const port =8000;
app.listen(port,()=> {
console.log(Server is listening on port ${port});
})


app.get('/hello_world', (req, res)=>{
    res.send('Hello World');
    })