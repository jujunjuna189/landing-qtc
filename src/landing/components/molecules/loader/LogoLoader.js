import { useEffect, useState } from "react";
import { lgLogo } from "../../../assets";

const LogoLoader = ({isLoader}) => {
    const [element, setElement] = useState(null);
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsShow(false);
        }, 1000);
        setTimeout(() => {
            setElement(SlidingShapes());
        }, 900);
        setTimeout(() => {
            setElement(null);
        }, 2200);
    }, []);

    const SlidingShapes = () => {
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-white-light overflow-hidden flex items-center justify-center">
                <div>
                    <svg width="2898" className="animate-slide-1" height="1284" viewBox="0 0 2898 1284" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M284.231 0H2898C2898 0 2722.2 227.221 2641 496.547C2536.5 843.136 2898 1284 2898 1284H284.231C284.231 1284 -41.9803 807.175 5 496.547C35.2679 296.419 284.231 0 284.231 0Z" fill="#486281"/>
                    </svg>

                </div>
                <div>
                    <svg width="2898" className="animate-slide-2" height="1284" viewBox="0 0 2898 1284" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M284.231 0H2898C2898 0 2722.2 227.221 2641 496.547C2536.5 843.136 2898 1284 2898 1284H284.231C284.231 1284 -41.9803 807.175 5 496.547C35.2679 296.419 284.231 0 284.231 0Z" fill="#EDA241"/>
                    </svg>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className={`flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-white-light z-30 transition-opacity duration-300 ${isShow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <img src={lgLogo} alt="QTC Logo" className={`w-72 transform transition-transform duration-300 ${isShow ? "translate-x-0" : "-translate-x-24"}`}/>
            </div>
            {element}
        </>
    );
}

export default LogoLoader;