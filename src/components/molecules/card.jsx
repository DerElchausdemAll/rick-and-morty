import React from "react";
import Bookmark from "../atoms/bookmark";
import Button from "@mui/material/Button";

const Card = ({ id, name, image, character }) => {
  return (
    <div>
      <li
        key={id}
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
              src={image}
              alt="Characters"
            />
          </figure>
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            <div>
              {name}
              <br />
              <Button variant="contained">tell me more</Button>
            </div>
          </h1>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Bookmark id={character.id}></Bookmark>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Card;
