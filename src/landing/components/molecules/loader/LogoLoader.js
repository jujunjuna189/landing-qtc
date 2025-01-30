import { useEffect, useState } from "react";
import { lgLogo } from "../../../assets";

const LogoLoader = ({ isLoader }) => {
    const [element, setElement] = useState(null);
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
        if (isLoader === false) {
            setTimeout(() => {
                setIsShow(false);
            }, 1000);
            setTimeout(() => {
                setElement(SlidingShapes());
            }, 800);
            setTimeout(() => {
                setElement(null);
            }, 2200);
        }
    }, [isLoader]);

    const SlidingShapes = () => {
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-white-light overflow-hidden flex items-center justify-center">
                <div>
                    <svg width="2822" className="animate-slide-1" height="1284" viewBox="0 0 2822 1284" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.499 0H2821.27C2821.27 0 2728.2 227.221 2647 496.547C2542.5 843.136 2821.27 1284 2821.27 1284H207.499C207.499 1284 -40.9801 807.175 6.00019 496.547C36.2681 296.419 207.499 0 207.499 0Z" fill="#486281" />
                    </svg>
                </div>
                <div>
                    <svg width="2822" className="animate-slide-2" height="1284" viewBox="0 0 2822 1284" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.499 0H2821.27C2821.27 0 2728.2 227.221 2647 496.547C2542.5 843.136 2821.27 1284 2821.27 1284H207.499C207.499 1284 -40.9801 807.175 6.00019 496.547C36.2681 296.419 207.499 0 207.499 0Z" fill="#EDA241" />
                    </svg>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className={`flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-white-light z-30 transition-opacity duration-300 ${isShow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <img src={lgLogo} alt="QTC Logo" className={`w-72 transform transition-transform duration-300 ${isShow ? "translate-x-0" : "-translate-x-24"}`} />
            </div>
            {element}
        </>
    );
}

export default LogoLoader;