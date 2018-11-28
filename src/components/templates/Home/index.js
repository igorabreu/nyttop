import React, { Component } from "react";
import Header from "../../organisms/Header";
import Feed from "../../organisms/Feed";
import ModalArticle from "../../organisms/ModalArticle";
import { getTopNews } from "../../../services/API";
import "./style.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentNews: [],
      currentSection: "politics",
      articleIndex: 0,
      modalVisible: false
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

  handleSection(section) {
    this.setState(
      {
        currentSection: section
      },
      () => {
        this.fecthContent();
      }
    );
  }

  handleSelection(articleIndex) {
    this.setState({
      articleIndex
    });
    this.handleModal(true);
    console.log("hey");
  }

  handleModal(state) {
    this.setState({
      modalVisible: state
    });
  }

  render() {
    const { contentNews, articleIndex, modalVisible } = this.state;
    return (
      <div className="Home">
        <Header handleSection={section => this.handleSection(section)} />
        <Feed
          content={contentNews}
          handleSelection={articleIndex => this.handleSelection(articleIndex)}
        />
        {modalVisible ? (
          <ModalArticle
            content={contentNews[articleIndex]}
            handleModal={() => this.handleModal(false)}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;
