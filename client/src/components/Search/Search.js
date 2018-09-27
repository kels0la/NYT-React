import React, { Component } from "react";
import "./Search.css"
import { Input } from "../Form";
import API from "../../utils/API"
import Results from "../../components/Results";
import Saved from "../../components/Saved";

class Search extends Component {
    state = {
        article: "",
        startYear: "",
        endYear: "",
        articles: [],
        saved: []
    }

    componentDidMount() {
      this.getSavedArticles()
    }

    handleSaveButton = (event, id) => {
      event.preventDefault();
      console.log(event);
      const articleData = this.state.articles.find(article=> article._id === id)
      API.saveArticle({articleData})
      .then((results) => {
        const filteredResults = this.state.articles.filter(article => article._id !== id)
        console.log(filteredResults)
        this.setState({articles: filteredResults})
      })
    };

    getSavedArticles = () => {
      API.getArticles().then(results => {
        console.log(results.data)
        this.setState({saved: results.data})
      })
    };
    
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.article && this.state.startYear && this.state.endYear) {
        API.searchNYT( this.state.article, this.state.startYear, this.state.endYear)
          .then( res => {this.setState({articles:res.data.response.docs})
          console.log("this.state.articles: ", this.state.articles);
        })
          .catch(err => console.log(err));
      }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleDeleteButton = (event, id) => {
      event.preventDefault();
      console.log(id)
      API.deleteArticle(id)
      .then((results) => {
        console.log(results);
        this.getSavedArticles();
      })
    };

    render() {
      return (
    <div>
    <div className="row">
    <div className="col-sm-1"></div>
      <div className="col-sm-10">
        <br />
        <div className="card">
          <div className="card-header">
            <strong>
              <i className="fa fa-list-alt"></i> Search Parameters</strong>
          </div>
          <div className="card-body">
            <form>
                <Input 
                    value={this.state.article}
                    onChange={this.handleInputChange}
                    name="article"
                    placeholder="Article"
                />
                <Input 
                    value={this.state.startYear}
                    onChange={this.handleInputChange}
                    name="startYear"
                    placeholder="Start Year"
                    type="text"
                />
                <Input 
                    value={this.state.endYear}
                    onChange={this.handleInputChange}
                    name="endYear"
                    placeholder="End Year"
                    type="text"
                />
              <button type="submit" onClick={this.handleFormSubmit} className="btn btn-default margin-right" id="run-search">
                <i className="fa fa-search"></i> Search</button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-sm-1"></div>
    </div>
  <div className="row">
   <div className="col-sm-1"></div>
      <div className="col-sm-10">
        <br />
        <div className="card">
          <div className="card-header">
            <strong><i className="fa fa-table"></i> Results</strong>
          </div>
            {this.state.articles.map(article => (
              <Results 
                url={article.web_url}
                title={article.headline.main}
                date={article.pub_date}
                key={article._id}
                _id={article._id}
                handleSaveButton={this.handleSaveButton}
              />
            ))}
        </div>
      </div>
      <div className="col-sm-1"></div>
    </div>
    <div className="row">
      <div className="col-sm-1"></div>
          <div className="col-sm-10">
          <br />
          <div className="card">
          <div className="card-header">
            <strong><i className="fa fa-table"></i> Saved</strong>
          </div>
            {this.state.saved.map(savedArticle => (
              <Saved 
                url={savedArticle.url}
                title={savedArticle.title}
                date={savedArticle.date}
                key={savedArticle._id}
                _id={savedArticle._id}
                handleDeleteButton={this.handleDeleteButton}
              />
            ))}
          </div>
          </div>
      <div className="col-sm-1"></div>
    </div>
  </div>
    )
  }
};

export default Search;