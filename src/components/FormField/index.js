import React from "react";

function FormField({ label, Tag, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}: 
        <Tag
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;
