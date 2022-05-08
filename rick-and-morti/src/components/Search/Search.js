import React from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.scss";

const Search = ({ search, setSearch, updatePageNumber, fetchedData, page }) => {  
  let display;
  if (fetchedData.results) {
    display = fetchedData.results.map((character) => {
      let { id, name, origin } = character;

      return (
        search.length && fetchedData.results ?
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-5">{origin.name}</div>
              </div>
            </div>
          </div>
        </Link> : null
      );
    });
  } else {
    display = "No Characters Found :/";
  }


  return (
    <form
      className={`${styles.search} d-flex flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      {display}
      {/* {
        search.length && fetchedData.results ?
        <div className="autocomplete">
          {fetchedData.results.map((character, id) => 
          <div className="autocomplete_element">
            <h6 className="autocomplete_name" key={id}>{character.name}</h6>
            <p className="autocomplete_origin">{character.origin.name}</p>
          </div>
        )}
        </div> : null
      } */}
    </form>
  );
};

export default Search;
