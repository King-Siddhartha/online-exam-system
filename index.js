const port = process.env.port||8080;
const express =require ("express ")
const app = express ()

// app.set (" view engine ", 'ejs')
app.get('/',(req,res)=>{
    return res.send('Hello world!')
})

app.listen(port ,()=>{
    console.log(' server running at '+ port)
})

module.exports = app 