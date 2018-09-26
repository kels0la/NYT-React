const db = require("../models"); //new
// let axios = require('axios'); // HTTP Request

module.exports = function (app) {

    app.get('api/articles', (req, res) => {
        db.Article.find().then(data => res.json(data));
    })
    
    app.post('/api/articles/:id', (req, res) => {
    console.log("trying to add saved article to database");
    console.log(req.body);
    const articleData = req.body
    article = new db.Article(articleData)
        db.Article.create(article)
        .then(result => res.json(result))
        .catch((error) => {
            return res.json(error);
        });
    })
}