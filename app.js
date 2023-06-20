const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const date = require(path.join(__dirname, "date.js"));
const port = 3000;

const app = express();

const items = ["Exercise", "Homework"];
const workItem = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use((express.static("public")));

app.get("/", (req, res)=>{

    const day = date.getDate();

    res.render("list", {listTitle: day, addItem: items});
});

app.post("/", (req, res)=>{
    const item = req.body.newItem;
    
    if(req.body.list === "Work") {
        workItem.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", (req, res)=>{
    res.render("list", {listTitle: "Work List", addItem: workItem});
});

app.post("/work", (req, res)=>{
    
});

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});