import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link, BrowserRouter, Routes
} from "react-router-dom";
import StartPage from "./StartPage";
import MainUserPage from "./MainUserPage";
import UserProfile from "./UserProfile";
import UserHistory from "./UserHistory";
import UserWithdrawal from "./UserWithdrawal";
import UserDeposit from "./UserDeposit";

function App() {
  const [token, setToken] = useState();

  /*if(!token) {
    return <StartPage setToken={setToken} />
  }*/

  return (<BrowserRouter>
    <Routes>
      <Route path="/withdrawal" element={<UserWithdrawal />} />
      <Route path="/deposit" element={<UserDeposit />} />
      <Route path="/history" element={<UserHistory />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/main" element={<MainUserPage />} />
      <Route path="/" element={<StartPage />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
