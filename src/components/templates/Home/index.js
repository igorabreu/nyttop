import React, { Component } from "react";
import Header from "../../organisms/Header";
import Feed from "../../organisms/Feed";
import { getTopNews } from "../../../services/API";
import { Link } from "react-router-dom";
import "./style.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentNews: [],
      currentSection: "politics"
    };
  }

  componentDidMount() {
    this.fecthContent();
  }

  fecthContent() {
    const { currentSection } = this.state;
    getTopNews(currentSection)
      .then(res => res.json())
      .then(data => {
        this.setState({
          contentNews: data.results
        });
      });
  }

  handleSelection(type) {
    this.setState({
      currentSection: type
    });
    this.fecthContent();
  }

  render() {
    const { contentNews } = this.state;
    return (
      <div className="Home">
        <Header handleSelection={type => this.handleSelection(type)} />
        <Feed content={contentNews} />
      </div>
    );
  }
}

export default Home;
