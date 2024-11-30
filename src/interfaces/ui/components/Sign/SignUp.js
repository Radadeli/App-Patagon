import React from "react";
import styles from "./signUp.module.scss";
const SignUp = () => {
    return (React.createElement("div", { className: styles.pageContainer },
        React.createElement("div", { className: styles.signUpContainer },
            React.createElement("h3", { className: styles.title }, "Sign Up"),
            React.createElement("form", { className: styles.form },
                React.createElement("label", null, "First Name:"),
                React.createElement("input", { className: styles.input, type: "text", placeholder: "First name", required: true }),
                React.createElement("label", null, "Last Name:"),
                React.createElement("input", { className: styles.input, type: "text", placeholder: "Last name", required: true }),
                React.createElement("label", null, "Email:"),
                React.createElement("input", { className: styles.input, type: "email", placeholder: "Email", required: true }),
                React.createElement("label", null, "Password:"),
                React.createElement("input", { className: styles.input, type: "password", placeholder: "Password", required: true }),
                React.createElement("label", null, "Confirm Password:"),
                React.createElement("input", { className: styles.input, type: "password", placeholder: "Confirm Password", required: true }),
                React.createElement("button", { className: styles.submitButton, type: "submit" }, "Sign Up")))));
};
export default SignUp;
