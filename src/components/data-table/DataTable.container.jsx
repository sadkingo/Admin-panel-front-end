import React from 'react'

import DataTable from './DataTable.component';
import { chartOptions } from './DataTable.config';

function DataTableContainer({
    className,
    type = "area",
    height = 350
}) {

    return (
        <DataTable
            className={className}
            type={type}
            height={height}
            chartOptions={chartOptions}
        />
    )
}

export default DataTableContainer;
