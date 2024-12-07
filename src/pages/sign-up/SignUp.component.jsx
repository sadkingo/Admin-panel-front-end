import "./signUp.style.css";
import { circleProps } from "./SignUp.config";

import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import Circle from "@components/circle"
import Form from "@components/form";
import Logo from "@components/logo";
import Field from "@components/field";

function SingUp() {

    return (
        <main className="sign-up">
            {renderBackGroundCircles()}
            <div className="sign-up__content">
                {renderLogo()}
                {renderForm()}
                {renderLoginWithSocialMediaIcons()}
                {renderForgetPassword()}
            </div>
        </main>
    );

    function renderBackGroundCircles() {
        return (
            <div className="sign-up__circles circle-parent">
                {circleProps.map((circleProp) => (
                    <Circle key={circleProp.id} {...circleProp} />
                ))}
            </div>
        )
    }

    function renderLogo() {
        return (
            <div className="sign-up__header">
                <Logo scale={0.5} />
                <p className="sign-up__header-text">Hope Ui</p>
            </div>
        )
    }

    function renderForm() {
        return (
            <Form className="sign-up__form" label="Sign Up" subLabel="Create your Hope UI account.">
                <Field
                    type="text"
                    label="First Name"
                    name="firstName"
                    placeholder="First Name"
                    required
                />
                <Field
                    type="text"
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    required
                />
                <Field
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <Field
                    type="tel"
                    label="Phone No."
                    name="tel"
                    placeholder="+213"
                    required
                />
                <Field
                    type="password"
                    label="Password"
                    name="password"
                    required
                />
                <Field
                    type="password"
                    label="Confirm password"
                    name="passwordConfirmation"
                    required
                />
                <div className="row" style={{ gridColumn: "span 2" }}>
                    <div className="sign-up__checkbox">
                        <Field
                            type="checkbox"
                            label="I agree with the terms of use"
                            name="remember"
                            required
                        />
                    </div>
                    <Field
                        type="button"
                        value="Sign Up"
                        style={{ width: 188, margin: "auto", marginTop: "8px" }}
                    />
                </div>
            </Form>
        )
    }

    function renderLoginWithSocialMediaIcons() {
        return (<React.Fragment>
            <p className="sign-up__alternative-text">or sign up with other accounts?</p>
            <div className="sign-up__social-media">
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
            <p className="sign-up__signin-link">
                Already have an Account <Link to="/login">Sign in</Link>
            </p>
        )
    }

}

export default SingUp;
