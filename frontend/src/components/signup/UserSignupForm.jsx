import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import SignuoBtn from "../buttons/SignuoBtn";
const UserSignupForm = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userSignupUrl = "http://localhost:4000/user/signup";
    try {
      const response = await axios.post(userSignupUrl, {
        fullname: { firstname, lastname },
        email,
        password,
      });
      console.log(response);
      if (response.status === 201) {
        navigate("/");
      } else {
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="flex flex-col w-full items-center gap-4 px-2"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full justify-center items-center gap-2">
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstname}
          placeholder="First Name"
          className="w-1/2 border rounded px-2 py-1"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastname}
          placeholder="Last Name"
          className="w-1/2 border rounded px-2 py-1"
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div className="flex w-full justify-center items-center">
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Email"
          className="w-full border rounded px-2 py-1"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex w-full justify-center items-center ">
        <input
          type="password"
          name="password"
          id=""
          value={password}
          placeholder="Password"
          className="w-full border rounded px-2 py-1"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <SignuoBtn btnText="User Sign Up" btnType="user" />
    </form>
  );
};

export default UserSignupForm;
