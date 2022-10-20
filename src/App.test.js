import { logRoles, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Checking app functionality', () => {
 it('check table is getting displayed with default values',()=>{
 render(<App />);
 
  const headerRow = screen.getByRole('row',{name:'Category Ammortization Period'});
  const noOfPaymentsRow = screen.getByRole('row',{name:'Number of Payments 300'});
  const monthlyPaymentRow = screen.getByRole('row',{name:'Mortage Payment 584.59'});
  const principalPaymentsRow = screen.getByRole('row',{name:'Principal Payments 100000'});
  const IntrestPaymentsRow = screen.getByRole('row',{name:'Intrest Payments 75377'});
  expect(headerRow).toBeVisible()
  expect(noOfPaymentsRow).toBeVisible()
  expect(monthlyPaymentRow).toBeVisible()
  expect(principalPaymentsRow).toBeVisible()
  expect(IntrestPaymentsRow).toBeVisible()

 })
 it('change Inputs and check the values displayed in the table',()=>{
  render(<App />);
  
   const mortageAmountInput = screen.getByLabelText('Mortage Amount')
   userEvent.type(mortageAmountInput,'200000')
   const intrestAmountInput = screen.getByLabelText('Interest Rate')
   userEvent.type(intrestAmountInput,'10')
   // we should add more changes here
   const calcButt =screen.getByRole("button",{name:'Calculate'})
   userEvent.click(calcButt)
   const headerRow = screen.getByRole('row',{name:'Category Ammortization Period'});
   const noOfPaymentsRow = screen.getByRole('row',{name:'Number of Payments 300'});
   const monthlyPaymentRow = screen.getByRole('row',{name:'Mortage Payment 1817.40'});
   const principalPaymentsRow = screen.getByRole('row',{name:'Principal Payments 200000'});
   const IntrestPaymentsRow = screen.getByRole('row',{name:'Intrest Payments 345220.00'});
   expect(headerRow).toBeVisible()
  expect(noOfPaymentsRow).toBeVisible()
  expect(monthlyPaymentRow).toBeVisible()
  expect(principalPaymentsRow).toBeVisible()
  expect(IntrestPaymentsRow).toBeVisible()
 
  })
  
});
