import "./App.css";
import React from "react";
import Footer from "./components/organisms/footer/footer";
import Header from "./components/organisms/header/header";
import Content from "./components/content";

// Roboto-Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
