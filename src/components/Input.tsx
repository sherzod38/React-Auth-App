import React from 'react';

interface InputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password';
  name?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  ...props 
}) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      {label && (
        <label style={{ 
          display: 'block', 
          marginBottom: '5px',
          color: error ? 'red' : 'inherit'
        }}>
          {label}
        </label>
      )}
      <input
        {...props}
        style={{
          width: '100%',
          padding: '8px',
          border: error ? '1px solid red' : '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      {error && (
        <div style={{ 
          color: 'red', 
          fontSize: '0.8rem',
          marginTop: '5px'
        }}>
          {error}
        </div>
      )}
    </div>
  );
};