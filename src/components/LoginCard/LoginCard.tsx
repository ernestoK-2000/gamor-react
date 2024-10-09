import React, { useRef, useState } from "react";
import "./LoginCard.css";
import { NavLink, useNavigate } from "react-router-dom";

function LoginCard() {
  const navigate = useNavigate()
  const errorRef = useRef<HTMLDivElement>(null)

  function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Read the form data
    const form = event.target;
    const formData = new FormData(form as HTMLFormElement);
    const formJson = Object.fromEntries(formData.entries());
    if(formJson["username"] && formJson["password"]){
      
      //login action
      navigate("../")
    }else{
      errorRef.current?.classList.add("show")
    }
  }

  return (
    <form id="loginForm" onSubmit={login}>
      <div className="form-controls">
        <div className="row">
          <label htmlFor="username">Username: *</label>
          <input id="username" name="username" />
        </div>
        <div className="row">
          <label htmlFor="password">Password: *</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>
      <div ref={errorRef} className="error-msg">Por favor, llene los campos anteriores antes de continuar</div>

      <div className="form-btns">
        <button className="nude-btn submit-login" type="submit">
          Sign in
        </button>
        <NavLink to={"/"} className="nude-btn cancel-login">
          Cancel
        </NavLink>
      </div>
    </form>
  );
}

export default LoginCard;
