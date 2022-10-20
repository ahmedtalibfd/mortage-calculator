import React from "react";

const Dropdown = ({ dropDownOptions = [] , defaultSelectedValue = 0, ...restOfTheProps}) => {

    const renderValues = dropDownOptions.map(({value,option}) => {
        return <option selected={value == defaultSelectedValue} value={value} >{option}</option>
    })
    return (
        <select className="form-control" {...restOfTheProps} >
            {renderValues}
        </select>
    )
}

export default Dropdown;