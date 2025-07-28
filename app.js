import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
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

app.get("/create", (req,res) => {
    res.render("create.ejs");
})

app.listen(port, () => {
    console.log(`Listenin on ${port}`);
});

app.post("/submit", (req,res) => {
    var title = req.body.title;
    var story = req.body.story;
    console.log('Received form data:');
    console.log('Title', title);
    console.log('Content', story);

    res.send('Post submitted successfully!');
});