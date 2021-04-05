//Npm Packages
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import AllPackages from "./pages/AllPackages";
import Packages from "./components/List";

export default function App() {
  const information = Packages();
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component ={HomePage}/>  
            <Route path="/ResultsPage/:query">
              <ResultsPage information={information}/>
            </Route>
            <Route path="/allpackages">
                   <AllPackages information={information}/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
