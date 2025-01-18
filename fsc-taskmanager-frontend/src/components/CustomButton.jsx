import "./CustomButtom.scss";

// Children receberá o corpo do component CustomButton
const CustomButton = ({ onClick, children }) => {
    <div className="custom-button-container" onClick={onClick}>
        {children}
    </div>;
};

export default CustomButton;
