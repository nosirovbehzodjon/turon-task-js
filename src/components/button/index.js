import button from "../../../styles/components/button/button.module.scss";
const Button = ({ type, children, ...otherProps }) => {
    switch (type) {
        case "secondBtn":
            return (
                <button className={button.secondBtn} {...otherProps}>
                    {children}
                </button>
            );
        default:
            return (
                <button className={button.mainBtn} {...otherProps}>
                    {children}     
                </button>
            );
    }
};
export default Button;
