import "./DataTable.style.css";

import React from 'react'
import ReactApexChart from "react-apexcharts";

function DataTable({
    className,
    type,
    height,
    chartOptions = { chartOptions }
}) {
    return (<div className="data-table-container">
        <div className="data-table-header">
            <div className="data-table-header__left-side">
                <div className="total-sales">$855.8K</div>
                <div className="title">Gross Sales</div>
            </div>
            <div className="data-table-header__mid">
                <span className="salces-color"></span>
                <span>Sales</span>
                <span className="cost-color"></span>
                <span>Cost</span>
            </div>
            <div className="data-table-header__right">
                <div className="option-title">This Week</div>
                <div className="open-date-options">{">"}</div>
            </div>
        </div>
        <ReactApexChart
            className={className}
            type={type}
            height={height}
            series={chartOptions.series}
            options={chartOptions} />
    </div>
    )
}

export default DataTable;
