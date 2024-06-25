import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
