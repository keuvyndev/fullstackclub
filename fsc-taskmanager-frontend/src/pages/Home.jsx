import "./Home.scss";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import Tasks from "../components/Tasks";
import { useEffect } from "react";

const Home = () => {
    const params = useParams();

    useEffect(() => {
        console.log({ params });
    }, [params]);

    return (
        <div className="home-container">
            <SideBar />
            <Tasks />
        </div>
    );
};

export default Home;
