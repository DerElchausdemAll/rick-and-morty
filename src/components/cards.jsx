import React, { useState, useEffect } from "react";
import Bookmark from "./bookmark";
// import { v4 as uuid } from "uuid";

// Roboto-Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// MUI - Elements
import Button from "@mui/material/Button";

// Fetch
// Weiterreichen an Komponente
// Styling der Componenten
// localStorage
// bookmarked/checked
// filter
// fetch other
// episodes
// locations

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

  return (
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
                <Bookmark></Bookmark>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Card;
