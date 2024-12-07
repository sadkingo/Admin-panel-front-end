import "./circle.style.css";
export default function Circle({ top, right, bottom, left, diameter, className = "", ...options }) {
    const style = {
        width: diameter || "0%",
        top: top ?? undefined,
        right: right ?? undefined,
        bottom: bottom ?? undefined,
        left: left ?? undefined
    }

    return <div style={style} className={className ? className + " circle" : "circle"} {...options}></div>
}
