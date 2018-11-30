import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "../../atoms/CloseIcon";
import dateConverter from "../../../utils/dateFormat";
import "./style.scss";

const ArticleHeader = ({
  title,
  published_date,
  byline,
  kicker,
  handleModalMenu
}) => (
  <div className="ArticleHeader">
    <div className="closeIcon">
      <CloseIcon fill={"#000"} handleModalMenu={() => handleModalMenu()} />
    </div>
    <h1 className="title">{title}</h1>
    <div className="published-date">{dateConverter(published_date)}</div>
    <div className="byline">{byline}</div>
    {kicker !== "" ? <div className="kicker">{kicker}</div> : null}
  </div>
);

ArticleHeader.propTypes = {
  title: PropTypes.string,
  published_date: PropTypes.string,
  byline: PropTypes.string,
  kicker: PropTypes.string
};

ArticleHeader.defaultProps = {
  title: "",
  published_date: "",
  byline: "",
  kicker: ""
};

export default ArticleHeader;
