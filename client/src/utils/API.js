import axios from "axios";

// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
export default {
    searchNYT: function(article, startYear, endYear) {
      const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=09e0c4c970dc451985fb32754183c0d4&q=${article}&begin_date=${startYear}0101&end_date=${endYear}0101&page=5`;
      return axios.get(queryUrl);
    },
    getArticles: function() {
      return axios.get("/api/articles");
    },
    saveArticles: function (articleData) {
      return axios.post("/api/articles", articleData);
    } 

};