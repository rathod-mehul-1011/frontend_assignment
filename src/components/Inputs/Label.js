import React from "react";

const Label = ({ label, isRequired, labelClass }) => {
  return (
    <label
      htmlFor=""
      className={`${labelClass} text-sm font-medium leading-5 text-mine-shaft mb-1`}
    >
      {label}
      {isRequired && <span className="text-roman">*</span>}
    </label>
  );
};

export default Label;
