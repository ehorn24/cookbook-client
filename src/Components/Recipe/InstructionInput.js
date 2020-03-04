import React from "react";

const InstructionInput = ({ steps, handleChange, handleDelete }) => {
  return steps.map((i, key) => {
    let stepId = `step-${i}`;
    return (
      <div key={key}>
        <label htmlFor={stepId}></label>
        <textarea
          type="text"
          name={stepId}
          id={stepId}
          className="field-input"
          value={i}
          placeholder={`Step ${key + 1}`}
          onChange={e => handleChange(key, e.target.value)}
        ></textarea>
        <button
          className="x-button"
          onClick={e => {
            e.preventDefault();
            handleDelete(i);
          }}
        >
          X
        </button>
      </div>
    );
  });
};

export default InstructionInput;
