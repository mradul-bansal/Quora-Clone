const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
var { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'))


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static (path.join(__dirname, "public")));

let posts = [
    { 
        id:uuidv4(),
        username: "john_doe",
        content: "I've been considering switching to a vegetarian diet for health reasons, but I'm concerned about getting enough protein. Can anyone share their experiences with vegetarianism and how they ensure they get enough protein daily? Any tips or resources would be greatly appreciated!",

    },
    {
        id:uuidv4(),
        username: "jane_smith",
        content: "How do I effectively balance work and personal life? As someone who works from home, I find it challenging to separate work from leisure time. What strategies have you found successful in maintaining a healthy work-life balance while working remotely?",

    },
    {
        id:uuidv4(),
        username: "mike_johnson",
        content: "What's the best way to learn a new language quickly? I've always wanted to learn Spanish, but I struggle to find the time and resources to commit to it. Are there any apps, online courses, or methods that you've found particularly effective for language learning?",

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
       let id = uuidv4();
       posts.push({id,  username, content});
        res.redirect("/posts");
    });
    app.get("/posts/:id",(req, res) =>{
        let { id } = req.params;
        let post = posts.find((p) => id ===p.id);
        res.render("show.ejs", { post });
    });

    app.patch ("/posts/:id", (req, res) => {
        let { id } = req.params;
        let newContent = req.body.content;
        let post = posts.find((p) => id === p.id);
        post.content = newContent;
        console.log(post);
        res.redirect("/posts");
        });

        app.get("/posts/:id/edit", (req, res) => {
            let { id } = req.params;
            let post = posts.find((p) => id === p.id);
            res.render("edit.ejs", { post });
        });
        

        app.delete ("/posts/:id", (req, res) => {
            let { id } = req.params;
              posts = posts.filter((p) => id !== p.id);
              res.redirect("/posts");
             });

app.listen(port, () => {
      console.log("Server is listning to port 8080");
});