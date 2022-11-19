import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link, BrowserRouter, Routes
} from "react-router-dom";
import StartPage from "./StartPage";
import MainUserPage from "./MainUserPage";
import MainAdminPage from "./MainAdminPage";
import UserProfile from "./UserProfile";

function App() {
  const [token, setToken] = useState();

  /*if(!token) {
    return <StartPage setToken={setToken} />
  }*/

  return (<BrowserRouter>
    <Routes>
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/main" element={<MainUserPage />} />
      <Route path="/" element={<StartPage />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
