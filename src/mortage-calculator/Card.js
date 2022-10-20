import React from "react";

const Card = ({ headerName = "Payment Plan", showHeader = true, children, ...restOfProps }) => {
    return (
        <div className="card container" {...restOfProps}>
            {showHeader && 
            <h5 className="card-header bg-primary">  
                    {headerName}
            </h5>}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default Card;