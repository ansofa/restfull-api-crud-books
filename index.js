const express = require("express");
const router = require("./router");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.set("view engine", "ejs")
app.set("views")

app.use(morgan("dev"));

app.use(router);

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
