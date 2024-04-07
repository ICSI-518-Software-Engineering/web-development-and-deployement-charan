import React from "react";
import "./user.css"
import { FaUserCircle } from "react-icons/fa";


export default function LoginUserDetails() {
  const user = localStorage.getItem("user");
  const username = JSON.parse(user).name;
  const email = JSON.parse(user).email;
  console.log(username);
  return (
    <div>
      {user ? (
        <div className="loginUser">
          <div className="card">
          {/* <p>Login user details</p> */}
          <FaUserCircle className="faCir"/>
          <p>{username}</p>
          <p>{email}</p>
          </div>
        </div>
      ) : (
        <div>
          <p>
            please login first{" "}
            <a href="/login">
              <button>login</button>
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
