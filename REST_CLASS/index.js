const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static (path.join(__dirname, "public")));

let post = [
    {
        username: "mradulbansal",
        content: "Pari pagal h"

    },
    {
        username: "hiralbansal",
        content: "hunny pagal h"

    },
    {
        username: "manishbansal",
        content: "dono pagal h"

    }
];

app.get("/", (req, res) => {
  res.send("Server Working Well!");
})

app.listen(port, () => {
      console.log("Server is listning to port 8080");
});