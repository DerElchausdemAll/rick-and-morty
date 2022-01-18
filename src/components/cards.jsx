import React, { useState, useEffect } from "react";
import Bookmark from "./bookmark";
import Button from "@mui/material/Button";

// import { v4 as uuid } from "uuid";

// const numbers = [1, 2, 3, 4, 5, 6];
// const lessThan4 = numbers.filter((number) => number < 4);

const Card = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setCharacters(() => data.results);
      });
  }, []);

  const [filter, setFilter] = useState(true);
  const toggleFilter = () => {
    // if (filter === true) {
    //   setFilter(false);
    // } else {
    //   setFilter(true);
    // }
    // setFilter(filter? false: true) das Gleiche nur in einer Zeile
    setFilter(!filter);
  };

  // const men = data
  //   ? data.results.filter((character) => character.gender === "Male")
  //   : null;

  return (
    <div>
      <div>
        <label>
          Filter:
          <input type="checkbox" checked={filter} onChange={toggleFilter} />
        </label>
      </div>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "30px",
          // position: "relative",
          // padding: "2em",
          // margin: "0 2.5em",
        }}
      >
        {characters.map((character, index) => {
          return (
            <li
              key={character.id}
              style={{
                listStyleType: "none",
              }}
            >
              <div
                style={{
                  background: "white",
                  color: "black",
                  width: "380px",
                  height: "550px",
                  border: "4px solid purple",
                  borderRadius: "20px",
                }}
              >
                <br></br>
                <figure style={{ justifyContent: "center" }}>
                  <img
                    style={{ border: "4px solid purple", borderRadius: "20px" }}
                    src={character.image}
                    alt="Characters"
                  />
                </figure>
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  {character.name}
                </h1>
                <Button
                  variant="contained"
                  // style={{ display: "flex", justifyContent: "center" }}
                >
                  tell me more
                </Button>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Bookmark id={character.id}></Bookmark>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
