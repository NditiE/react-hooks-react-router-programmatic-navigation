import React from "react";
import { useHistory } from "react-router-dom";

function Home({ isLoggedIn }) {
  const history = useHistory();

  if (!isLoggedIn) {
    
    history.push("/login");
    return null;
  }

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;
