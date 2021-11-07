import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
  font-size: 1.4rem;
  /* Using Gill Sans because it's fun, easy to read, and emits energy */
  font-family: "Gill Sans", sans-serif;
`;

function App() {
  return (
    <Container>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Timers</Link>
            </li>
            <li>
              <Link to="/docs">Documentation</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/docs">
            <DocumentationView />
          </Route>
          <Route path="/">
            <TimersView />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
