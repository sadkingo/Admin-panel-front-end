import { validHtmlEvents } from "@configs/validHtmlEventsConst";

function getEventsFromElementParams(params) {
    return Object.entries(params)
        .filter((param) => validHtmlEvents.has(param[0]))
        .map((event) => [event[0].substring(2).toLocaleLowerCase(), event[1]]);
}
export { getEventsFromElementParams };
