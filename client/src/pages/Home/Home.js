import React, { Component } from "react";
import Search from "../../components/Search";
import Results from "../../components/Results";
import Saved from "../../components/Saved";

class Home extends Component {
  state = {
    books: []
  };

  render() {
    return (
      <div>
        <Search />
        <Results />
        <Saved />
      </div>
    );
  }
}

export default Home;