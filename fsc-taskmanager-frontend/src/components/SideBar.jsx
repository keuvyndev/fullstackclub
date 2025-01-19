import "./Sidebar.scss";
import logo from "../assets/images/logo.png";
import CustomButton from "./CustomButton";

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Full Stuck Club" />
            </div>
            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    );
};

export default SideBar;
