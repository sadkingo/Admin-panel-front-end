import React from 'react'
import StatCard from './StatCard.component';

function StatCardContainer({
    progress = 0,
    title = "",
    stat = "$0",
}) {

    return (
        <StatCard
            value={progress}
            title={title}
            stat={stat}
        />
    )
}

export default StatCardContainer;

