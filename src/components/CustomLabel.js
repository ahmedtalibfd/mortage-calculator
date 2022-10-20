import React from "react";

const Customlabel = ({onIconClick,labelname="",labelFor="", ...restOfprops }) => {


    return (
        <div className="col-md-5" {...restOfprops}>
            <input type="image"  title="Additional info" src="https://itools-ioutils.fcac-acfc.gc.ca/MC-CH/images/help.gif" alt="helper Image" onClick={onIconClick}/>
            <label for={labelFor} className="font-weight-bold align-left">{labelname}</label>
        </div>
    )
}

export default Customlabel;