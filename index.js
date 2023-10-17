const express = require("express");
const router = require("./router");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(router);

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
