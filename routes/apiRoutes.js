const db = require("../models"); //new
// let axios = require('axios'); // HTTP Request

module.exports = function (app) {

    app.get('/api/articles', (req, res) => {
        // db.Article.find().then(data => res.json(data));
        db.Article.find()
            .then(function (articles) {
                // If all articles are successfully found, send them back to the client
                res.json(articles);
            })
            .catch(function (err) {
                // If an error occurs, send the error back to the client
                res.json(err);
            });
    });
    
    app.post('/api/articles', (req, res) => {
    console.log(req.body);
    const articleData = req.body
    article = new db.Article(articleData)
        db.Article.create(article)
        .then(result => {
            res.json(result)
        }).catch((error) => {
            return res.json(error);
        });
    });

    app.delete("/api/articles/:id", (req, res) => {
        db.Article.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        }).catch((error) => {
            return res.json(error);
        });
    });
}