import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Input = ({ label, error, ...props }) => {
    return (_jsxs("div", { style: { marginBottom: '15px' }, children: [label && (_jsx("label", { style: {
                    display: 'block',
                    marginBottom: '5px',
                    color: error ? 'red' : 'inherit'
                }, children: label })), _jsx("input", { ...props, style: {
                    width: '100%',
                    padding: '8px',
                    border: error ? '1px solid red' : '1px solid #ddd',
                    borderRadius: '4px'
                } }), error && (_jsx("div", { style: {
                    color: 'red',
                    fontSize: '0.8rem',
                    marginTop: '5px'
                }, children: error }))] }));
};
