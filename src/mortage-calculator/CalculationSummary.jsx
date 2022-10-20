import React, { useEffect } from "react";

const CalculationSummary = ({ rowData }) => {
 
    const renderRows = rowData.map(([headerName = "", value = ""]) => {
        return <tr key={headerName+value}>
            <td>{headerName}</td>
            <td>{value}</td>
        </tr>
    })
 
    return (
        <div className="container">
            <h2>calculation Summary</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Ammortization Period</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows}
                </tbody>
            </table>
        </div>
    )
}

export default CalculationSummary;