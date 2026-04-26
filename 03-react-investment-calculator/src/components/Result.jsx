import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

const Result = ({ filters }) => {
  const resultDatas = calculateInvestmentResults(filters);
  const initialInvestment =
    resultDatas[0].valueEndOfYear -
    resultDatas[0].interest -
    resultDatas[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Inestment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultDatas.length > 0 && resultDatas.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>
                {formatter.format(totalInterest)}
              </td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
