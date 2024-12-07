import "./login.style.css";

import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import { circleProps } from "./LoginPage.config";
import Circle from "@components/circle"
import Logo from "@components/logo";
import Form from "@components/form";
import Field from "@components/field";

function LoginPage() {

    return (
        <main className="login">
            <div className="login__content login__content--left">
                {renderLogo()}
                {renderLoginForm()}
                {renderLoginWithSocialMediaIcons()}
                {renderForgetPassword()}
            </div>
            <div className="login__content login__content--right circle-parent">
                {renderBackGrounCircles()}
            </div>
        </main>
    );

    function renderLogo() {
        return (
            <div className="login__logo">
                <Logo scale={0.5} />
                <p className="login__brand-name">Hope Ui</p>
            </div>
        )
    }

    function renderLoginForm() {
        return (
            <Form className="login__form" label="Sign In" subLabel="Sign in to stay connected.">
                <Field
                    type="email"
                    label="Email"
                    placeholder="example@example.com"
                    style={{ width: "100%" }}
                    required />
                <Field
                    type="password"
                    label="Password"
                    style={{ width: "100%" }}
                    required />
                <Field
                    type="checkbox"
                    label="Remember me?"
                    required />
                <a href="#forgetPassword" className="login__forgot-password">Forgot Password</a>
            </Form>
        )
    }

    function renderLoginWithSocialMediaIcons() {
        return (<React.Fragment>
            <p className="login__alt-text">or sign in with other accounts?</p>
            <div className="login__social-media">
                <a href="#google" className="login__social-link"><Icon icon="flat-color-icons:google" width={24} /></a>
                <a href="#facebook" className="login__social-link"><Icon icon="logos:facebook" width={24} /></a>
                <a href="#linkedIn" className="login__social-link"><Icon icon="devicon:linkedin" width={24} /></a>
                <a href="#Instagram" className="login__social-link"><Icon icon="skill-icons:instagram" /></a>
            </div>
        </React.Fragment>
        )
    }

    function renderForgetPassword() {
        return (
            <p className="login__signup-text">
                Don’t have an account?
                <Link to="/sign-up" className="login__signup-link">
                    Click here to sign up.
                </Link>
            </p>
        )
    }

    function renderBackGrounCircles() {
        return (
            <React.Fragment>
                {
                    circleProps.map((circleProp) => (
                        <Circle key={circleProp.id} {...circleProp} className="login__circle"></Circle>
                    ))
                }
            </React.Fragment>
        )
    }
}

export default LoginPage;
