import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/login" render={(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />} />
        <Route exact path="/" render={(props) => <Home {...props} isLoggedIn={isLoggedIn} />} />
      </Switch>
    </div>
  );
}

export default App;
