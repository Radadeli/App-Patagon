import React, { useState } from "react";
import styles from "./signUp.module.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "/Users/ramir/OneDrive/Desktop/Viajes Patagon Crypto/App/App Patagon/src/interfaces/auth/AuthProvider";
import { API_URL } from "/Users/ramir/OneDrive/Desktop/Viajes Patagon Crypto/App/App Patagon/src/interfaces/auth/constants";
import { AuthResponsError } from "./types";

const SignUpModal: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();
  const goTo = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        console.log("User created succesfully");
        setErrorResponse("");
        goTo("/signin");
      } else {
        console.log("Something went wrong");
        const json = (await response.json()) as AuthResponsError;
        setErrorResponse(json.body.error);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.signUpContainer}>
        <h3 className={styles.title}>Sign Up</h3>
        {!errorResponse && (
          <div className={styles.error}>
            {" "}
            <p>{errorResponse}</p>{" "}
          </div>
        )}
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email:</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={styles.submitButton} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
