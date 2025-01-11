import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/atoms";

const CreateModal = () => {
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
        console.log("Data Saved!");
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
                <div className="flex gap-2 justify-center items-center border rounded-full border-dark-muted pl-4 pr-2 py-1">
                    <span className="border-dark-muted text-sm">Add New News</span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary-dark"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" />
                        </svg>
                    </span>
                </div>
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
                    className={`relative p-5 mt-10 border border-white-muted rounded-lg bg-white-light w-[652px] z-20 shadow-all transform transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-10"
                        }`}
                >
                    <div className="leading-3">
                        <span className="text-base font-medium">Add New News</span>
                        <br />
                        <small>Please fill in the news data form</small>
                    </div>
                    <div className="min-h-[25vh] flex flex-col gap-1 my-2">
                        <span>Oke</span>
                        <div className="flex-grow" />
                        <div className="flex justify-end mt-3">
                            <Button
                                className="bg-slate-700 text-white-light rounded-md"
                                onClick={onSave}
                            >
                                Simpan
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateModal;