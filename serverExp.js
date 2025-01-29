const express = require('express');
const app = express();
app.use(express.json());
app.post('/register',(req,res) => {
    const {name, email,password} = req.body;
    if(!name || !email || !password) {
        return res.status(400).json({error:'Name,email,and password are required'});
    }
    const user = {
        name,
        email,
        password,
    };
    res.status(201).json({message:'Registration successful',user});
});
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> {
    console.log(Server is running on port ${PORT});
});
