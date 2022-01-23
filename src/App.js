import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogListing from "./containers/BlogListing";
import Header from "./containers/Header";
import "./App.css";
import Footer from "./containers/Footer";
import BlogDetails from "./containers/blogDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      
        <Switch>
          <Route path="/" exact component={BlogListing} />
          <Route path="/blog/:blogId" component={BlogDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
