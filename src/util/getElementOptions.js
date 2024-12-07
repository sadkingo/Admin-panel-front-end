import { validHtmlEvents } from "@configs/validHtmlEventsConst";

function getElementOptions(unfilteredOptions) {
    return Object.fromEntries(Object.entries(unfilteredOptions)
        .filter((option) => !validHtmlEvents.has(option[0])));
}
export { getElementOptions };
