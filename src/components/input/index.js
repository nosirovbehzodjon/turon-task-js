import input from "../../../styles/components/input/input.module.scss";
const Input = ({ title, placeholder, type, ...otherProps }) => {
    return (
        <div className={input.input}>
            <span className={input.title}>{title}</span>
            <input placeholder={placeholder} type={type} {...otherProps} />
        </div>
    );
};
export default Input;
