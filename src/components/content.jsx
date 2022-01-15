import React from "react";
import Card from "./cards";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  background: linear-gradient(
    to bottom right,
    #084730dc,
    #084730dc,
    #0652363c,
    #084730dc,
    rgba(28, 63, 42, 0.55)
  );
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vh;
  height: auto;
  color: "white";
`;

const Content = () => {
  return (
    <StyledContainer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Card
        style={{
          width: "100vw",
          height: "80vh",
        }}
      ></Card>
    </StyledContainer>
  );
};

export default Content;
