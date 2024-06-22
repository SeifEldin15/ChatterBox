import React from 'react';
import "./InputField.css";

const InputField = ({ placeholder, name, id, type = "text", value, onChange }) => {
    return (
        <input
            className='InputField'
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
        />
    );
};

export default InputField;
