import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

 

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl w-full mx-auto min-h-screen">
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;