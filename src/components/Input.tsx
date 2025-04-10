import React from 'react';
import { STYLE_VARS } from '../styles/variables';

// Yangilangan InputProps interfeysi
type InputProps = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password';
  name?: string; // <- name property qo'shildi
  style?: React.CSSProperties;
};

const Input: React.FC<InputProps> = ({ 
  label, 
  value, 
  onChange, 
  type = 'text',
  name, // <- name qabul qilinadi
  style = {} 
}) => {
  const baseStyle: React.CSSProperties = {
    width: '100%',
    padding: STYLE_VARS.sizes.inputPadding,
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    borderRadius: STYLE_VARS.sizes.borderRadius,
    fontFamily: STYLE_VARS.fonts.main,
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      {label && <label style={{ display: 'block', marginBottom: '5px' }}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name} // <- name input elementiga uzatiladi
        style={{ ...baseStyle, ...style }}
      />
    </div>
  );
};

export default Input;