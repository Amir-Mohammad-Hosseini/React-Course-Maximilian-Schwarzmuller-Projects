import { useState } from "react";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [investmentFilters, setInvestmentFilters] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const investmentIsVaid = investmentFilters.duration >= 1;

  const handleFilterResults = (filterName, filterValue) => {
    setInvestmentFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      updatedFilters[filterName] = +filterValue;
      return updatedFilters;
    });
  };
  return (
    <>
      <div id="user-input">
        <UserInput {...investmentFilters} onFilter={handleFilterResults} />
      </div>
      { investmentIsVaid && <Result filters={investmentFilters} /> }
      {!investmentIsVaid && <p className="center">Please enter a duration greater than zero.</p>}
    </>
  );
}

export default App;
