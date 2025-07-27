import express from "express";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req,res) => {
    res.render("index.ejs");
})

app.get("/home", (req,res) => {
    res.render("index.ejs");
})

app.get("/view", (req,res) => {
    res.render("content.ejs");
})

app.listen(port, () => {
    console.log(`Listenin on ${port}`);
});