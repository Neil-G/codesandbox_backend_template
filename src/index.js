const express = require("express");
const app = express();
const port = 8080;
const { resolve } = require("path");

app.get("/", (req, res) => res.sendFile(resolve("./src/index.html")));
app.get("/test", (req, res) => res.send("this is a test"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
