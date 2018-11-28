import React, { Component } from "react";
import Title from "../../atoms/Title";
import "./style.scss";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionName: "Política"
    };
  }

  handleSection(section, sectionName) {
    this.setState({
      sectionName
    });
    this.props.handleSection(section);
  }

  render() {
    const { sectionName } = this.state;
    return (
      <div className="NavBar">
        <ul>
          <li
            onClick={() =>
              this.handleSection("science", "Ciência & Tecnologia")
            }
          >
            Ciência & Tecnologia
          </li>
          <li onClick={() => this.handleSection("health", "Saúde")}>Saúde</li>
          <li onClick={() => this.handleSection("politics", "Política")}>
            Política
          </li>
          <li onClick={() => this.handleSection("world", "Mundo")}>Mundo</li>
        </ul>
        <Title text={sectionName} />
      </div>
    );
  }
}

export default NavBar;
