import React from "react";

// Styles
import "./button.css";

// Icons


const Button = ({ type, style, text, onClick, loading }) => {
  return (
    <button type={type} className="button bg-green-600" style={style} onClick={onClick}>
      
      <span className="bg-slate-700 p-2 rounded-lg pr-4 pl-4  border-[5px] border-blue-700 ">{text}</span>
    </button>
  );
};

export default Button;
