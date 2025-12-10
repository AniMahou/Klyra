import express from "express";

const app = express()

app.listen(3008, (req,res) => {
    console.log("Login page entered")
})