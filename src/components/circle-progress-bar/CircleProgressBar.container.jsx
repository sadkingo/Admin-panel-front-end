import CircleProgressBar from "./CircleProgressBar.component";

function CircleProgressBarContainer({
    className,
    valueStart = 0,
    valueEnd,
    duration,
    easingFunction,
    repeat = false,
    shouldUseInView = false,
    children,
}) {

    return (
        <CircleProgressBar
            className={className}
            valueStart={valueStart}
            valueEnd={valueEnd}
            duration={duration}
            easingFunction={easingFunction}
            shouldUseInView={shouldUseInView}
            repeat={repeat}
        >
            {children}
        </CircleProgressBar>
    )
}
export default CircleProgressBarContainer;
