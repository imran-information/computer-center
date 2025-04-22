import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

 

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl w-full mx-auto">
            <Outlet></Outlet>
            </div>
           
        </div>
    );
};

export default Root;