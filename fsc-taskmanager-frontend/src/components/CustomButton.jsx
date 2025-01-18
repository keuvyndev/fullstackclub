import "./CustomButtom.scss";

// Children receberá o corpo do component CustomButton
const CustomButton = ({ onClick, children }) => {
    return (
        <div className="custom-button-container" onClick={onClick}>
            {children}
        </div>
    );
};

export default CustomButton;
