import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageComponent from "./components/views/pages/HomePageComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePageComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
