import "./Form.style.css";

function Form({
    id,
    action = "#",
    method = "get",
    label = "",
    subLabel = "",
    children,
    className,
    options
}) {

    return (
        <form
            className="Form"
            id={id}
            action={action}
            method={method}
            {...options}
        >
            {label !== "" ? <h1>{label}</h1> : ""}
            {subLabel !== "" ? <h4>{subLabel}</h4> : ""}
            <div className={className}>
                {children}
            </div>
        </form>
    )
}

export default Form;
