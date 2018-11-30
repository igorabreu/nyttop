import React, { Component } from "react";
import Header from "../../organisms/Header";
import Feed from "../../organisms/Feed";
import ModalMenu from "../../organisms/ModalMenu";
import ModalArticle from "../../organisms/ModalArticle";
import { getTopNews } from "../../../services/API";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentNews: [],
      currentSection: "politics",
      sectionTitle: "Política",
      articleIndex: 0,
      modalMenuVisible: false,
      modalArticleVisible: false
    };
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

  handleSection(section, sectionTitle) {
    this.setState(
      {
        currentSection: section,
        sectionTitle
      },
      () => {
        this.fecthContent();
      }
    );
    this.handleModalMenu(false);
  }

  handleSelection(articleIndex) {
    this.setState({
      articleIndex
    });
    this.handleModalArticle(true);
  }

  handleModalMenu(state) {
    this.setState({
      modalMenuVisible: state
    });
  }

  handleModalArticle(state) {
    this.setState({
      modalArticleVisible: state
    });
  }

  componentDidMount() {
    this.fecthContent();
  }

  render() {
    const {
      contentNews,
      articleIndex,
      modalMenuVisible,
      modalArticleVisible,
      sectionTitle
    } = this.state;
    return (
      <div className="Home">
        <Header
          handleModalMenu={() => this.handleModalMenu(true)}
          sectionTitle={sectionTitle}
        />
        {contentNews && contentNews.length > 0 ? (
          <Feed
            content={contentNews}
            handleSelection={articleIndex => this.handleSelection(articleIndex)}
          />
        ) : null}

        {modalMenuVisible ? (
          <ModalMenu
            handleSection={(section, sectionTitle) =>
              this.handleSection(section, sectionTitle)
            }
            closeModal={() => this.handleModalMenu(false)}
          />
        ) : null}
        {modalArticleVisible ? (
          <ModalArticle
            content={contentNews[articleIndex]}
            closeModal={() => this.handleModalArticle(false)}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;
