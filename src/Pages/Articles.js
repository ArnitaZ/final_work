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

  const [startList, setStartList] = useState(0);
  const endList = startList + 3;

  const moveLeft = () => {
    let nextSelected = startList - 3;
    if (nextSelected < 0) {
      nextSelected = 0;
    }
    setStartList(nextSelected);
  };
  const moveRight = () => {
    let nextSelected = startList + 3;
    if (nextSelected > 10) {
      nextSelected = 10;
    }
    setStartList(nextSelected);
  };
  const changePageOne = () => {
    setStartList(0);
  };
  const changePageTwo = () => {
    setStartList(3);
  };
  const changePageThree = () => {
    setStartList(6);
  };

  const articlesList = dataSearch
    .slice(startList, endList)
    .map((article, index) => {
      return (
        <div className="container article-row article-container justify-content-center mt-1">
          <div className="row" key={index}>
            <div className="col-2">
              <img
                src={article.coverImg}
                className="img-thumbnail"
                width="300"
                alt="landmark"
              />
            </div>

            <div className="col-2">{article.title}</div>

            <div className="col-7" style={{ textAlign: "justify" }}>
              {article.description}
            </div>
            <div className="col-1">{article.datePublished}</div>
          </div>
          <hr />
        </div>
      );
    });
  return (
    <div>
      <div className="row ps-0 ps-md-5">
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
        <div className="col-2 mt-3 mb-4 d-flex flex-column">
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
      <div>{articlesList}</div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group float-end"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              onClick={() => moveLeft(startList)}
              type="button"
              class="btn btn-outline-secondary"
              style={{ background: "white", border: "none", color: "darkgrey" }}
            >
              «
            </button>
            <button
              onClick={() => changePageOne(startList)}
              type="button"
              class="btn btn-outline-secondary"
              style={{ background: "white", border: "none", color: "darkgrey" }}
            >
              1
            </button>
            <button
              onClick={() => changePageTwo(startList)}
              type="button"
              class="btn btn-outline-secondary"
              style={{ background: "white", border: "none", color: "darkgrey" }}
            >
              2
            </button>
            <button
              onClick={() => changePageThree(startList)}
              type="button"
              class="btn btn-outline-secondary"
              style={{ background: "white", border: "none", color: "darkgrey" }}
            >
              3
            </button>
            <button
              onClick={() => moveRight(startList)}
              type="button"
              class="btn btn-outline-secondary"
              style={{ background: "white", border: "none", color: "darkgrey" }}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Articles;
