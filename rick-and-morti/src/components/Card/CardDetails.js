import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let [episode, setEpisode] = useState([]);
  let { name, location, origin, gender, image, status, species, created } = fetchedData;
  let firstEpisode = episode.slice(-1)


  console.log(fetchedData.episode)
  

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      setEpisode(data.episode[0])
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="img-fluid" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className=" badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold">Episode first seen in episode: </span>
            {firstEpisode}            
          </div>
          <div className="">
            <span className="fw-bold">Created: </span>
            {created}
          </div>
          <div className="">
            <Link to={"/"}>
              <div className={`${styles.goBack}`}
              >
                <p>Home</p>
              </div>
            </Link>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
