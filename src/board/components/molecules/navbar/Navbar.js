import { useState } from "react";
import { lgLogo } from "../../../assets";

const Navbar = ({ navbar }) => {
    const [element] = useState();

    return (
        <nav className="bg-white py-2 px-7 shadow-md z-10 flex justify-between items-center">
            <div className="cursor-pointer flex items-center gap-2" onClick={() => { }}>
                <div className="min-w-28 w-28 max-w-28">
                    <img src={lgLogo} alt="LogoQTC" className="w-full" />
                </div>
            </div>
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => { }} onMouseOver={() => { }} onMouseLeave={() => { }}>
                <span className="font-semibold">Admin</span>
                {/* <div className="w-8 h-8 rounded-full bg-slate-200">
                    <img src={""} alt="Profile" />
                </div> */}
            </div>
            {element}
        </nav>
    );
}

export default Navbar;