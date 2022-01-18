import React, { useState, useEffect } from "react";
import Card from "../../molecules/card";

// const numbers = [1, 2, 3, 4, 5, 6];
// const lessThan4 = numbers.filter((number) => number < 4);

const Cards = () => {
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
        }}
      >
        {characters.map((character, index) => {
          return (
            <Card
              key={character.id}
              image={character.image}
              name={character.name}
              character={character}
            />
          );
        })}
        ;
      </ul>
    </div>
  );
};

export default Cards;
