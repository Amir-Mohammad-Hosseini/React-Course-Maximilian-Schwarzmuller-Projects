import React from "react";

const UserInput = ({
  onFilter,
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="field">Initial Investment</label>
          <input
            name="field"
            type="number"
            required
            value={initialInvestment}
            onChange={(event) =>
              onFilter("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="field">Annual Investment</label>
          <input
            name="field"
            type="number"
            required
            value={annualInvestment}
            onChange={(event) =>
              onFilter("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="field">Expected Return</label>
          <input
            name="field"
            type="number"
            required
            value={expectedReturn}
            onChange={(event) => onFilter("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="field">Duration</label>
          <input
            name="field"
            type="number"
            required
            value={duration}
            onChange={(event) => onFilter("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
