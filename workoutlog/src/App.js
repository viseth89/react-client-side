import React, { useState, useEffect } from "react";
import SiteBar from "./home/Navbar";
import Auth from "./auth/Auth";
import WorkoutIndex from "./workouts/WorkoutIndex";

function App() {
  const [sessionToken, setSessionToken] = useState(""); //1
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  useEffect(() => {
    //2
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    //3
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <WorkoutIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div>
      <SiteBar clearToken={clearToken} />
      {protectedViews()}
    </div>
  );
}

export default App;
