import "./logo.style.css";

function Logo({ scale = 0.5 }) {
    const height = 54.3 * scale;
    const width = 7.7 * scale;
    const style = {
        height: height + "px",
        width: width + "px",
    }
    return <div style={{ height: height + 3.2 * scale, width: height + 3.2 * scale }} className="logo">
        <div style={style} className="top-right rectangle"></div>
        <div style={style} className="bottom-right rectangle"></div>
        <div style={style} className="bottom-left rectangle"></div>
        <div style={style} className="top-left rectangle"></div>
    </div>
}
export default Logo;
