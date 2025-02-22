import { useEffect, useRef, useState } from "react";

const JobDetailModal = (props) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const toggleModal = () => {
        setIsVisible((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    const isVerticalScrollbarVisible = () => {
        return document.documentElement.scrollHeight > window.innerHeight;
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const scrollBarWidth = window.innerWidth - document.body.clientWidth; // Hitung lebar scrollbar
        if (isVisible) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`; // Hindari lompatan UI
        } else {
            setTimeout(() => {
                document.body.style.overflow = "";
                document.body.style.paddingRight = "";
            }, isVerticalScrollbarVisible() ? 300 : 0);
        }
    }, [isVisible]);

    return (
        <div className="inline-block w-full" ref={ref}>
            {/* Button to toggle modal */}
            <div className="cursor-pointer" onClick={toggleModal}>
                {props.children}
            </div>

            {/* Modal */}
            <div
                className={`fixed top-0 left-0 w-full h-full flex justify-center items-start z-20 transition-opacity over duration-300 bg-dark-dark bg-opacity-75 overflow-y-auto ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleModal}
            >

                {/* Modal Content */}
                <div
                    className={`relative mt-10 mb-10 border border-white-muted rounded-lg bg-white-light w-[1024px] px-20 py-10 mx-10 z-20 shadow-all transform transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-10"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-10 text-center">
                        <span className="text-3xl">{props.item?.title}</span>
                        <br />
                        <small className="text-primary-dark">{props.item?.location}</small>
                        <div className="my-10 flex justify-center">
                            <div className="w-14 h-[2px] bg-primary-dark" />
                        </div>
                        <span className="text-primary-dark">Job Description</span>
                    </div>
                    <div className="min-h-[50vh] flex flex-col gap-1 my-2">
                        <div className="mt-3 text-sm" dangerouslySetInnerHTML={{ __html: props.item?.description }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailModal;