import { useEffect, useRef, useState } from "react";
import { Button } from "../../atoms";

const DeleteConfirmModal = (props) => {
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

    const onSave = async () => {
        toggleModal();
        props.onSave && props.onSave();
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="inline-block" ref={ref}>
            {/* Button to toggle modal */}
            <div className="cursor-pointer" onClick={toggleModal}>
                {props.children}
            </div>

            {/* Modal */}
            <div
                className={`fixed top-0 left-0 w-full h-full flex justify-center items-start z-10 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Overlay */}
                <div
                    className="absolute w-full h-full bg-dark-dark bg-opacity-75"
                    onClick={toggleModal}
                ></div>

                {/* Modal Content */}
                <div
                    className={`relative p-5 mt-10 border border-white-muted rounded-lg bg-white-light w-[452px] z-20 shadow-all transform transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-10"
                        }`}
                >
                    <div className="leading-3">
                        <span className="text-base font-medium">Confirm delete data</span>
                        <br />
                        <small>Are you sure you want to delete this data?</small>
                    </div>
                    <div className="flex justify-end mt-5">
                        <div className="flex gap-2">
                            <Button
                                className="bg-slate-700 border border-dark-muted bg-transparent rounded-md"
                                onClick={toggleModal}
                            >
                                No
                            </Button>
                            <Button
                                className="bg-slate-700 text-white-light rounded-md"
                                onClick={onSave}
                            >
                                Yes
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;