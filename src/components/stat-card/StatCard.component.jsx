import "./StatCard.style.css";

import React from 'react'
import { Icon } from "@iconify/react";

import CircleProgressBar from "@components/circle-progress-bar";

function StatCard({
    value,
    title,
    stat,
}) {
    return (
        <div className="card card--progress">
            <CircleProgressBar
                className={"circle-progress-bar"}
                valueEnd={value}
                valueStart={0}
                duration={1}>
                <Icon
                    className="CircularProgressbar__icon"
                    icon="bi:arrow-up"
                    width={"35%"}
                    height={"35%"}
                />
            </CircleProgressBar>
            <div className="circle-info">
                <div className="title">{title}</div>
                <div className="cost">{stat}</div>
            </div>
        </div>
    )
}

export default StatCard;

