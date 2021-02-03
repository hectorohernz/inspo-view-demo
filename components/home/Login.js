import React, { useState, useEffect } from "react";
import { useInput } from "../utilsComp/UseInput";
import ErrorMessage from "../utils/ErrorMessage";

export default function login({ data }) {
  const {
    value: username,
    bind: bindUsername,
    reset: resetUsername,
  } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");
  const [user, setUser] = useState(data);
  const [errorRequest, setErrorRequest] = useState([false, ""]);

  useEffect(() => {
    if (errorRequest[0]) {
      setTimeout(() => {
        setErrorRequest([false, ""]);
      }, 3000);
    }
  });

  const fetchUser = async (username, password) => {
    const info = {
      username: username,
      password: password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    };
    try {
      const req = await fetch("http://localhost:5000/api/user/login", options);
      const userData = await req.json();
      if (!userData.status) {
        console.log(userData, ":: unsuccessful");
        return setErrorRequest([true, userData.message]);
      }
      console.log(userData, ":: successful");
      return setUser(userData);
    } catch (err) {
      console.log("error Inside fetch funk ::", err);
      return { data: err };
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await fetchUser(username, password);
    resetUsername();
    resetPassword();
  };

  return (
    <>
      {errorRequest[0] ? <ErrorMessage message={errorRequest[1]} /> : <></>}
      <section className="home--login">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" {...bindUsername} placeholder="Username.."/>
          <label>Password:</label>
          <input type="text" {...bindPassword} placeholder="Password.."/>
          <input
            type="submit"
            value="Log In"
            disabled={!password || !username}
          />
        </form>
      </section>
    </>
  );
}

login.getInitalProps = async (username, password) => {
  try {
    const req = await fetch("http://localhost:5000/api/user/login");
    const data = await req.json();
    return { data: req };
  } catch {
    console.log("Error:", err);
    return { data: err };
  }
};
