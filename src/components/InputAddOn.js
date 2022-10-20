import React from "react";

const InputAddOn = ({addOnText,placeholder="", onInputChange ,addAddOnRight=false, ...restOfProps}) => {
    return (
        <div className="input-group mb-3">
                {addOnText && !addAddOnRight && <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">{addOnText}</span>
                </div>}
                <input  type="text" className="form-control" placeholder={placeholder} onChange={onInputChange} {...restOfProps}/>
                {addOnText && addAddOnRight && <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon1">{addOnText}</span>
                </div>}
            </div>
    )
}

export default InputAddOn;