import ErrorPage from "./ErrorPage.component";

function ErrorContainer({ errorNumber, errorTitle, errorSubtitle }) {
    return <ErrorPage
        errorNumber={errorNumber}
        errorTitle={errorTitle}
        errorSubtitle={errorSubtitle}
    />
}

export default ErrorContainer;
