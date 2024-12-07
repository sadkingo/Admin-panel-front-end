import Field from "./Field.component";

import { useEffect, useMemo, useRef, useState } from "react";

import { getEventsFromElementParams } from "@util/getEventsFromElementParams";
import { getElementOptions } from "@util/getElementOptions";
import idGenerator from "@util/idGenerator";

function FieldContainer({
    id,
    type = "text",
    className = "",
    name = type,
    value = "",
    placeholder = "",
    label = "",
    disabled,
    isChecked = false,
    required,
    ...rest
}) {
    const generatedId = useMemo(() => idGenerator(), []);

    const fieldRef = useRef(null);
    const [fieldValue, setFieldValue] = useState(value)

    const events = getEventsFromElementParams(rest);
    const options = getElementOptions(rest);

    const validationResponse = { value: null, success: false };
    const validationRule = getValidationRules();

    function handleFieldValueChange(e) {
        setFieldValue(e.target.value)
    }

    useEffect(() => {
        if (fieldRef.current) {
            events.forEach(([eventType, handler]) => {
                fieldRef.current.addEventListener(eventType, handler);
            });

            // Add validation event
            if (validationRule && Object.keys(validationRule).length > 0) {
                fieldRef.current.addEventListener("validate", validate);
            }
        }
        return () => {
            if (fieldRef.current) {
                events.forEach(([eventType, handler]) => {
                    fieldRef.current.removeEventListener(eventType, handler);
                });
                fieldRef.current.removeEventListener("validate", validate);
            }
        };
    }, []);

    function validate(data) {
        console.log("validating");
        return "output";
    }

    function resetFieldValue() {
        setFieldValue("");
        fieldRef.value = "";
    }

    //TODO get validation rules from the API
    function getValidationRules() {
        return {}
    }

    return (
        <Field
            id={id || `${type}-${generatedId}`}
            type={type}
            value={value}
            className={"Field " + className}
            placeholder={placeholder}
            label={label}
            name={name}
            required={!!required}
            isDisabled={!!disabled}
            fieldValue={fieldValue}
            validationResponse={validationResponse}
            onChange={handleFieldValueChange}
            validate={validate}
            resetFieldValue={resetFieldValue}
            ref={fieldRef}
            options={options}
        />
    )

}
export default FieldContainer;
