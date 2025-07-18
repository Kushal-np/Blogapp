import express from 'express'
const app = express()
const PORT = 7989;

app.listen(PORT , ()=>{
    console.log("server is already running")
})