import React from "react";

function dropdown(props) {
  let options = [];
  Object.entries(props.list).forEach((val, ind) => {
    options.push(
      <option key={ind} value={val[0]}>
        {val[1]}
      </option>
    );
  });
  return (
    <div className="col-auto">
      <label>{props.label}</label>
      <select onChange={props.onChange} name={props.name}>
        {options}
      </select>
    </div>
  );
}
export default dropdown;
