import { useState } from "react";

const Form = (props) => {
  return (
    <form className="form">
      <input
        placeholder="Enter task ..."
        type="text"
        onChange={props.handleChange}
      />
      <button type="button" onClick={props.submitEvent}>
        Submit
      </button>
    </form>
  );
};

export default Form;
