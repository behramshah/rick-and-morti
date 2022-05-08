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
          <div className={`${styles.automplete_element}`}>
              <p><span>{name}</span> origin: <span>{origin.name}</span></p>              
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
        type="search"
        autocomplete="on"
      />
      <div className={`${styles.automplete}`}>
        {display}
      </div>
    </form>
  );
};

export default Search;
