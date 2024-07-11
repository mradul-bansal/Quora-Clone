const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static (path.join(__dirname, "public")));

let posts = [
    {
        id:"1a",
        username: "mradulbansal",
        content: "Pari pagal h",

    },
    {
        id:"2b",
        username: "hiralbansal",
        content: "hunny pagal h",

    },
    {
        id:"3c",
        username: "manishbansal",
        content: "dono pagal h",

    }
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", {posts});
});
    app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
    });
    app.post("/posts", (req, res) => {
       let {username, content} = req.body;
       posts.push({username, content});
        res.redirect("/posts");
    });
    app.get("/posts/:id",(req, res) =>{
        let { id } = req.params;
        let post = posts.find((p) => id ===p.id);
        res.render("show.ejs", { post });
    });

app.listen(port, () => {
      console.log("Server is listning to port 8080");
});