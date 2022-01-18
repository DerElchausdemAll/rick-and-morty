import "./App.css";
import React from "react";
import Footer from "./components/organisms/footer/footer";
import Header from "./components/organisms/header/header";
import Content from "./components/templates/main-section";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

export default App;
