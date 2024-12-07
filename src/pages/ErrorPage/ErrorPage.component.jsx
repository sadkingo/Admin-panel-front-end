import "./ErrorPage.style.css";
import { Link } from "react-router-dom";

import Circle from "@components/circle";
import { errorCircleProps } from "./ErrorPage.config";


function ErrorPage({ errorNumber, errorTitle, errorSubtitle }) {

    return (
        <main className="error-page">
            {renderErrorNumber()}
            {renderBackgroundCircles()}
            {renderBackToHome()}
        </main>
    );

    function renderErrorNumber() {
        return <div className="error-page__number">{errorNumber}</div>
    }

    function renderBackgroundCircles() {
        return (
            errorCircleProps.map(circleProp =>
                <Circle className="error-page__circle" key={circleProp.id} {...circleProp} />
            )
        )
    }

    function renderBackToHome() {
        return (
            <div className="error-page__container">
                <p className="error-page__title">{errorTitle}</p>
                <p className="error-page__subtitle">{errorSubtitle}</p>
                <Link to="/">
                    <button className="error-page__back-btn">Back to Home</button>
                </Link>
            </div>
        )
    }
}
export default ErrorPage;
