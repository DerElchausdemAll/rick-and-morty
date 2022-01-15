import React from "react";
import Button from "@mui/material/Button";
import StyledHeader from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <h2>Rick and Morty</h2>
      <Button variant="contained">Favorites</Button>
    </StyledHeader>
  );
};

export default Header;
