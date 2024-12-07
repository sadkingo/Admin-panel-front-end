import React, { useState, useEffect } from "react";
import { Animate } from "react-move";

function AnimationProvider({
    isSeen,
    valueStart = 0,
    valueEnd,
    duration,
    repeat = false,
    children,
}) {
    const [isAnimated, setIsAnimated] = useState(false);
    
    useEffect(() => {
        let interval;

        if (repeat) {
            interval = setInterval(() => {
                setIsAnimated((prev) => !prev);
            }, duration * 1000);
        } else {
            setIsAnimated(true);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [repeat, duration]);

    return (
        <Animate
            start={() => ({
                value: valueStart,
            })}
            update={() => ({
                value: [isAnimated && isSeen ? valueEnd : valueStart],
            })}
        >
            {({ value }) => children(value)}
        </Animate>
    );
};

export default AnimationProvider;
