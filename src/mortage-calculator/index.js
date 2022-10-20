import React, { useState } from "react";
import Customlabel from "../components/CustomLabel";
import Dropdown from "../components/Dropdown";
import InputAddOn from "../components/InputAddOn";
import { INTREST_PAYMENTS, MONTHLY_PAYMENT, monthsDropdownVals, NUMBER_OF_PAYMENTS, PaymentFeqDropdownvals, PRINCIPAL_PAYMENTS, termDropdownVals, TOTAL_COST, yearsDropdownVals } from "../constants";
import CalculationSummary from "./CalculationSummary";
import Card from "./Card";

const MortageCalculator = () => {


const [mortageAmount,setMortageAmount] =useState(100000)
const [intrestRate,setIntrestRate] =useState(5)
const [months,setMonths] =useState(0)
const [years,setYears] =useState(25)
const [summary, setSummary]=useState([[NUMBER_OF_PAYMENTS,300],[MONTHLY_PAYMENT,584.59],[PRINCIPAL_PAYMENTS,mortageAmount],[INTREST_PAYMENTS,75377.00],[TOTAL_COST,175377.00]])

const onMonthsSelection = (changeEvent) => {
    setMonths(changeEvent.target.value)
}
const onYearsSelection = (changeEvent) => {
    setYears(changeEvent.target.value)
}
const onMortageAmtChange = (changeEvent) => {
    setMortageAmount(changeEvent.target.value)
}
const onIntrestRateChange = (changeEvent) => {
    setIntrestRate(changeEvent.target.value)
}

const calculateMonthlyPayment=()=> {
    const percentageRate = intrestRate / 1200;
        const lengthOfLoan = years*12+months;
        let monthlyPayment = (mortageAmount * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
        monthlyPayment = monthlyPayment.toFixed(2);
        const intrestPayment = (lengthOfLoan*monthlyPayment - mortageAmount).toFixed(2)
        let totalCost = (lengthOfLoan*monthlyPayment).toFixed(2)
        setSummary([[NUMBER_OF_PAYMENTS,lengthOfLoan],[MONTHLY_PAYMENT,monthlyPayment],[PRINCIPAL_PAYMENTS,mortageAmount],[INTREST_PAYMENTS,intrestPayment],[TOTAL_COST,totalCost]])
}
    return <>
    <div className="row">
        <Card>
            <div onChange={onMortageAmtChange}  className="row form-group">
                <Customlabel labelname="Mortage Amount" labelFor="mortageAmount"/>
                <div className="col-md-7">
                    <InputAddOn placeholder="100,000.00" addOnText="$"  id="mortageAmount" type="number"/>
                </div>
            </div>
            <div onChange={onIntrestRateChange} className="row form-group">
                <Customlabel labelname="Interest Rate" labelFor="IntrestRate" />
                <div className="col-md-7">
                    <InputAddOn placeholder="5.00" addOnText="%" addAddOnRight={true} id="IntrestRate" type="number"/>
                </div>
            </div>
            <div className="row form-group">
                <Customlabel labelname="Amortization Period"  labelFor="amortiz"/>
                <div className="col-md-7">
                    <Dropdown onChange={onYearsSelection} dropDownOptions={yearsDropdownVals} defaultSelectedValue={25} id="amortiz" />
                    <Dropdown onChange={onMonthsSelection} dropDownOptions={monthsDropdownVals}  />
                </div>
            </div>
            
        </Card>
    </div>
    <button className="btn btn-primary m-5" onClick={calculateMonthlyPayment} >Calculate</button>
    <CalculationSummary rowData={summary} />
    </>
}

export default MortageCalculator;