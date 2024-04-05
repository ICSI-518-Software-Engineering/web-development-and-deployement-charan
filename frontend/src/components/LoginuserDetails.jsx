import React from "react";

export default function LoginUserDetails() {
  const user = localStorage.getItem("user");
  const username = JSON.parse(user).name;
  const email = JSON.parse(user).email;
  console.log(username);
  return (
    <div>
      {user ? (
        <div>
          <p>Login user details</p>
          <p>Name: {username}</p>
          <p>Email: {email}</p>
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
