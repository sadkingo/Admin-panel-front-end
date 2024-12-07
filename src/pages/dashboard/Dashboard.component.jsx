import "./dashboard.style.css"

import React, { useState } from "react"
import { Icon } from "@iconify/react"

import Header from "@components/header"
import NavMenu from "@components/nav-menu"
import Circle from "@components/circle"
import SettingsSideBar from "@components/setting-menu"
import DataTable from "@components/data-table"
import StatCard from "@components/stat-card";
import VisaCard from "@components/visa-card"

export default function Dashboard({ data }) {
    const [cardGroupPosition, setCardGroupPosition] = useState(0)
    function handleMoveCardsGroupLeft() {
        setCardGroupPosition((position) => Math.min(0, position + 200));
    }
    function handleMoveCardsGroupRight() {
        setCardGroupPosition((position) => Math.max(-1200, position - 200));
    }
    return (
        <main className="dashboard">
            <SettingsSideBar />
            <NavMenu />
            <div className="dashboard-content">
                <Header />
                {renderContentHeader()}
                <div className="content">
                    {renderStatCards()}
                    <DataTable
                        type="area"
                        className={"area-chart card"}
                        height={350}
                    />
                    <VisaCard  className="dashboard-content__visa-card"/>
                </div>
            </div>
        </main>
    )

    function renderContentHeader() {
        return (
            <div className="dashboard-content__head circle-parent">
                <div className="head__group">
                    <div className="head__group--title">Hello Devs !</div>
                    <div className="head__group--subtitle">We are on a mission to help developers like you to build beautiful projects for free.</div>
                    <button className="head__group--announcments">
                        <Icon width={24} height={24} icon="fa6-solid:microphone-lines" />
                        <span>Announcments</span>
                    </button>
                </div>
                {renderHeaderBackGroundCircles()}
            </div>
        )
    }

    function renderStatCards() {
        return (
            <div className="stat-cards-container">
                <button onClick={handleMoveCardsGroupLeft} className="left-arrow">{"<"}</button>
                <div
                    style={{ left: cardGroupPosition }}
                    className="slider"
                >
                    {data.statCardsData.map((card) => {
                        return <StatCard
                            key={card.id}
                            progress={card.progress}
                            title={card.title}
                            stat={card.stat}
                        />
                    })}
                </div>
                <button onClick={handleMoveCardsGroupRight} className="right-arrow">{">"}</button>
            </div>
        )
    }

    function renderHeaderBackGroundCircles() {

        return (
            <>
                {data.circleProps.map(
                    circleProp =>
                        <Circle key={circleProp.id} className="error-page__circle" {...circleProp} />
                )}
            </>
        )
    }
}
