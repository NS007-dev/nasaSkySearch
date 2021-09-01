import React from "react";

const DateInput = (props) => (
  <form onSubmit={props.changeDate}>
    <div className="inputDate">
      <h3>Enter a date: </h3>
      <p>In the format of (YYYY-MM-DD) :</p>
      <input />
      <input type="submit" />
    </div>
  </form>
);

export default DateInput;
