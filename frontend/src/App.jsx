import { Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import InventoryApp from "./components/InventoryApp";
import API from "./components/API";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import LoginUserDetails from "./components/LoginuserDetails";

const App = () => {
    console.log("window.location.pathname",window.location.pathname);
  const location = window.location.pathname
  return (
    <>
      {location !== "/login" && location !== "/" && location!== "/signup" && (
        <Navbar />
      )}
      <Routes>
        <Route index element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/calculator" element={<Calculator />} />
        <Route path="/inventory-app" element={<InventoryApp />} />
        <Route path="/data-fetching" element={<API />} />
        <Route path="/user-details" element={<LoginUserDetails/>}/>
      </Routes>
    </>
  );
};

export default App;
