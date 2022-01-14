import React, { useState, useEffect } from "react";
import Card from "./cards";

const Content = () => {
  return (
    <div
      style={{
        color: "white",
        background: "black",
      }}
    >
      <Card
        style={{
          width: "100vw",
          height: "80vh",
        }}
      ></Card>
    </div>
  );
};

export default Content;
