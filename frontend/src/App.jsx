import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Login from "./components/authpages/Login";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
