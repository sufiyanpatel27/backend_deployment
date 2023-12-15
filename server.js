const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.json("here we go")
})

app.get("/data", (req, res) => {
    res.json("data here")
})

app.listen(8000, () => {
    console.log("server is running on port 8000")
})