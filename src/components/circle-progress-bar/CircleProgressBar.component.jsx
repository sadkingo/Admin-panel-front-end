import "./CircleProgressBar.style.css"

import React from "react";
import AnimationProvider from "@components/animation-provider";

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

function CircleProgressBar({
    className,
    valueStart = 0,
    valueEnd,
    duration,
    easingFunction,
    shouldUseInView = false,
    repeat = false,
    children
}) {

    return (
        <AnimationProvider
            valueStart={valueStart}
            valueEnd={valueEnd}
            duration={duration}
            easingFunction={easingFunction}
            shouldUseInView={shouldUseInView}
            repeat={repeat}
        >
            {percentage => (
                <CircularProgressbarWithChildren
                    className={className}
                    value={percentage}
                    styles={buildStyles({
                        strokeLinecap: 'round',
                        pathTransition:
                            "stroke-dashoffset 1s ease 0s",
                    })}
                >
                    {children}
                </CircularProgressbarWithChildren>
            )}
        </AnimationProvider>
    )

}

export default CircleProgressBar;
