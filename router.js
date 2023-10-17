const express = require("express");
const BookController = require("./controller/book-controller");
const router = express.Router();

const bookController = new BookController();

router.get("/v1/books", bookController.getBook);
router.post("/v1/books", bookController.storeBook);
router.put("/v1/book/:id", bookController.updateBook);
router.delete("/v1/book/:id", bookController.deleteBook);

module.exports = router;
