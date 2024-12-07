import React from 'react'

import Dashboard from './Dashboard.component';
import { circleProps, statCardsData } from "./Dashboard.config"

function DashboardContainer() {
    return (
        <Dashboard
            data={{ circleProps: circleProps, statCardsData: statCardsData }}
        />
    )
}

export default DashboardContainer;
