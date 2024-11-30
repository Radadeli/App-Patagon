import React from "react";
import styles from "./signIn.module.scss";
const SignIn = () => {
    return (React.createElement("div", { className: styles.pageContainer },
        React.createElement("div", { className: styles.signInContainer },
            React.createElement("h3", { className: styles.title }, " Sign In "),
            React.createElement("p", { className: styles.description }, "For security, please sign in to access your information"),
            React.createElement("form", { className: styles.form },
                React.createElement("label", null, "Email:"),
                React.createElement("input", { className: styles.input, type: "email", placeholder: "Enter your email", required: true }),
                React.createElement("label", { className: styles.password }, "Password: "),
                React.createElement("input", { className: styles.input, type: "password", placeholder: "Enter your password", required: true }),
                React.createElement("button", { className: styles.submitButton, type: "submit" }, "Sign In")))));
};
export default SignIn;
