import "./Field.style.css";
import { forwardRef } from "react";

const Field = forwardRef(function ({
    id,
    className,
    type,
    value,
    fieldValue,
    placeholder,
    name,
    isDisabled,
    label,
    required,
    onChange,
    options
}
    , ref
) {
    const renderMap = {
        // Default render
        "text": renderDefaultField,
        "email": renderDefaultField,
        "time": renderDefaultField,
        "datetime-local": renderDefaultField,
        "date": renderDefaultField,
        "password": renderDefaultField,
        "submit": renderDefaultField,
        "tel": renderDefaultField,
        "number": renderDefaultField,
        // CheckBoxes & radio
        "radio": renderCheckboxOrRadio,
        "checkbox": renderCheckboxOrRadio,
        // Custom fields //TODO: file select and textarea
        "file": renderFileField,
        "select": renderSelectField,
        "textarea": renderTextarea,
        "button": renderButton,
    }

    return (
        <div className={className}>
            {renderErrorMessages()}
            {renderLabel()}
            {
                renderMap[type] ? renderMap[type]() : renderDefaultField()
            }
        </div>
    )

    function renderLabel() {
        if (type === "radio" || type === "checkbox") return;
        return (
            <div className="field-LabelContainer">
                <label className="field-LabelContainer__label" htmlFor={id}>
                    {label}
                    {renderRequiredTag()}
                </label>
            </div>
        )
    }

    function renderDefaultField() {
        return (
            <input
                id={id}
                className={className}
                type={type}
                name={name}
                value={fieldValue}
                placeholder={placeholder}
                required
                ref={ref}
                disabled={isDisabled}
                onChange={onChange}
                {...options}
            />
        )
    }

    function renderCheckboxOrRadio() {
        return (
            <label
                htmlFor={id}
            >
                <input
                    className={className}
                    id={id}
                    type={type}
                    name={name}
                    ref={ref}
                    value={fieldValue}
                    disabled={isDisabled}
                    onChange={onChange}
                    {...options}
                />
                {label}
            </label>
        );
    }

    function renderFileField() {
        //TODO make file field component
        return (
            <>renderFileField</>
        )
    }

    function renderSelectField() {
        //TODO make select field component
        return (
            <>renderSelectField</>
        )
    }

    function renderTextarea() {
        return (
            <textarea
                className={className}
                ref={ref}
                disabled={isDisabled}
                onChange={onChange}
            />
        );
    }

    function renderButton() {
        return (
            <button
                className={className}
                id={id}
                ref={ref}
                disabled={isDisabled}
                {...options}
            >
                {value}
            </button>
        )
    }

    function renderErrorMessages() {
        return (
            <div className={"field__error"}>

            </div>
        )
    }

    function renderRequiredTag() {
        if (!required) {
            return null;
        }

        return (
            <span className="Field__label--required">
                {" *"}
            </span>
        );
    }

})

export default Field;
