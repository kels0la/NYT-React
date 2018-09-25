import React, { Component } from "react";
import "./Search.css"
import { Input} from "../Form";

class Search extends Component {
    state = {
        article: "",
        startYear: "",
        endYear: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    render(){
      return (
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
              <button type="submit" className="btn btn-default margin-right" id="run-search">
                <i className="fa fa-search"></i> Search</button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-sm-1"></div>
    </div>
       )
    }
};

export default Search;