const { Books } = require("../models");

class BookService {
  constructor() {
    this.bookModel = Books;
  }

  async getBook() {
    try {
      return await this.bookModel.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  async storeBook(payload) {
    try {
      const { title, author, publish_year, description, genre } = payload;
      const book = this.bookModel.create({
        title,
        author,
        publish_year,
        description,
        genre,
      });

      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async updateBook(payload, id) {
    try {
        const { title, author, publish_year, description, genre } = payload;
        const book = this.bookModel.update({title, author, publish_year, description, genre}, {
            where: {
                id: id
            }
        })

        return book

    } catch (error) {
        console.log(error);
    }
  }

  async deleteBook(id) {
    const book = this.bookModel.destroy({
        where: {
            id
        }
    })
    return book
  }
}

module.exports = BookService;
