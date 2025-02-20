import React, { useState } from "react";
import styles from "./signIn.module.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "/Users/ramir/OneDrive/Desktop/Viajes Patagon Crypto/App/App Patagon/src/interfaces/auth/AuthProvider";
import { API_URL } from "/Users/ramir/OneDrive/Desktop/Viajes Patagon Crypto/App/App Patagon/src/interfaces/auth/constants";
import { AuthResponsError, AuthResponse } from "./types";

interface SignInModalProps {
  onLogin: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();
  const goTo = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        console.log("Login succesfull");
        setErrorResponse("");
        const json = (await response.json()) as AuthResponse;

        if (json.body.accessToken && json.body.refreshToken) {
          auth.saveUser(json);
        }

        goTo("/");
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

  // if (auth.isAuthenticated) {
  //   return <Navigate to="/services/packages" />;
  // }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.signInContainer}>
        <h3 className={styles.title}> Sign In </h3>
        {!errorResponse && (
          <div className={styles.error}>
            <p>{errorResponse}</p>
          </div>
        )}
        <p className={styles.description}>
          For security, please sign in to access your information
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.password}>Password: </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.submitButton} type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
