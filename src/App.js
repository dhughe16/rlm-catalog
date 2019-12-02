import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Styles/normalize.css";
import "./Styles/skeleton.css";
import Videos from "./Components/Videos";
import Commentary from "./Components/Commentary";
import Collection from "./Components/Collection";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Videos</Link>
            </li>
            <li>
              <Link to="/commentary">Commentary</Link>
            </li>
            <li>
              <Link to="/collection">Collection</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/commentary">
            <Commentary />
          </Route>
          <Route path="/collection">
            <Collection />
          </Route>
          <Route path="/">
            <Videos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
