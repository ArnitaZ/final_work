import { useState } from "react";
import getArticlesData from "../API/getArticlesData";
import { Link } from "react-router-dom";

function Articles() {
  const [article] = useState(getArticlesData());
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = article.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const articlesRow = dataSearch.map((article, index) => {
    return (
      <div className="container article-row article-container justify-content-center mt-1">
        <div className="row" key={index}>
          <div className="col-2">{article.coverImg}</div>
          <div className="col-2">{article.title}</div>
          <div className="col-7 ">{article.description}</div>
          <div className="col-1">{article.datePublished}</div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-2 mt-3 mb-4 d-flex flex-column">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Articles
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-8 mt-3 mb-4 d-flex flex-column"></div>
        <div className="col-2 d-flex flex-column">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={filter}
              onChange={searchText.bind(this)}
            />
          </form>
        </div>
      </div>
      <div>{articlesRow}</div>
    </div>
  );
}
export default Articles;
