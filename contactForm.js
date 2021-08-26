const express = require('express');

const app = express();

const PORT = process.env.PORT || 5500;

//Middleware 
app.use(express.static('/index.html'));
app.use(express.json());


app.get('/', (req,res) => {
    res.sendFile('/index.html', {root: __dirname});
})

app.post('/',(req,res)=>{
    console.log(req.body);
})

app.listen(PORT,()=>{
    console.log(`server on port ${PORT}`);
})