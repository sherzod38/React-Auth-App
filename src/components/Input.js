import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { STYLE_VARS } from '../styles/variables';
const Input = ({ label, value, onChange, type = 'text', name, // <- name qabul qilinadi
style = {} }) => {
    const baseStyle = {
        width: '100%',
        padding: STYLE_VARS.sizes.inputPadding,
        boxSizing: 'border-box',
        border: '1px solid #ddd',
        borderRadius: STYLE_VARS.sizes.borderRadius,
        fontFamily: STYLE_VARS.fonts.main,
    };
    return (_jsxs("div", { style: { marginBottom: '15px' }, children: [label && _jsx("label", { style: { display: 'block', marginBottom: '5px' }, children: label }), _jsx("input", { type: type, value: value, onChange: onChange, name: name, style: { ...baseStyle, ...style } })] }));
};
export default Input;
