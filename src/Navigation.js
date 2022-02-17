import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import UploadFile from "./components/UploadFile";
import HomeScreen from "./screens/HomeScreen";
const Navigation = () => {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/upload" component={UploadFile} />
    </Router>
  );
};

export default Navigation;
