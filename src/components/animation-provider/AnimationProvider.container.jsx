import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';

import AnimationProvider from './AnimationProvider.component';

function AnimationProviderContainer({
    shouldUseInView = false,
    valueStart = 0,
    valueEnd,
    duration,
    repeat = false,
    children,
}) {
    const [isSeen, setIsSeen] = useState(!shouldUseInView);
    if (!shouldUseInView) {
        return (
            <React.Fragment>
                {renderAnimation()}
            </React.Fragment>
        )
    }
    return (
        <InView onChange={(inView) => inView && setIsSeen(true)}>
            {renderAnimation()}
        </InView>
    )
    function renderAnimation() {
        return (
            <AnimationProvider
                isSeen={isSeen}
                valueStart={valueStart}
                valueEnd={valueEnd}
                duration={duration}
                repeat={repeat}
            >
                {children}
            </AnimationProvider>
        )
    }

}
export default AnimationProviderContainer;

