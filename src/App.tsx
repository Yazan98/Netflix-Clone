import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageComponent from "./components/views/pages/HomePageComponent";
import SearchPageComponent from "./components/views/pages/SearchPageComponent";
import TvShowsComponent from "./components/views/pages/TvShowsComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePageComponent} />
          <Route exact path="/search/:name" component={SearchPageComponent} />
          <Route exact path="/tv/shows" component={TvShowsComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
