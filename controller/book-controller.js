const BookService = require("../services/book-service");

const bookService = new BookService();

class BookController {
  async getBook(req, res) {
    try {
      const book = await bookService.getBook();
      res.status(200).json({ message: "SUCCES", data: book });
    } catch (error) {
      res.status(500).json({ message: "FAILED" });
      console.error(error);
    }
  }

  async storeBook(req, res) {
    try {
      const payload = req.body;
      const store = await bookService.storeBook(payload);
      res.status(200).json({ message: "SUCCES", data: store });
    } catch (error) {
      res.status(500).json({ message: "FAILED" });
      console.log(error);
    }
  }

  async updateBook(req, res) {
    try {
      const payload = req.body;
      const id = req.params.id;
      const update = await bookService.updateBook(payload, id);
      res.status(200).json({ message: "SUCCES", data: update });
    } catch (error) {
      res.status(500).json({ message: "FAILED" });
      console.log(error);
    }
  }

  async deleteBook(req, res) {
    try {
      const id = req.params.id;
      const deleteBook = await bookService.deleteBook(id);
      res.status(200).json({ message: "SUCCES", data: deleteBook });
    } catch (error) {
      res.status(500).json({ message: "FAILED" });
      console.log(error);
    }
  }

  async pageBook(req, res) {
    const book = await bookService.getBook();
    res.render("book", {
      book
    })
  }
}

module.exports = BookController;
