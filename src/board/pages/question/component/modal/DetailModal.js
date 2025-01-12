import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/atoms";

const DetailModal = (props) => {
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
                    className={`relative p-5 mt-10 border border-white-muted rounded-lg bg-white-light w-[652px] z-20 shadow-all transform transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-10"
                        }`}
                >
                    <div className="leading-3">
                        <span className="text-base font-medium">Detail Question</span>
                        <br />
                        <small>General Question</small>
                    </div>
                    <div className="min-h-[25vh] flex flex-col gap-1 my-2">
                        <div className="grid grid-cols-2">
                            <div className="py-2 border-b border-white-muted flex flex-col">
                                <span className="font-semibold uppercase">First Name</span>
                                <span>{props.item?.first_name}</span>
                            </div>
                            <div className="py-2 border-b border-white-muted flex flex-col">
                                <span className="font-semibold uppercase">Last Name</span>
                                <span>{props.item?.last_name}</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="py-2 border-b border-white-muted flex flex-col">
                                <span className="font-semibold uppercase">Email Address</span>
                                <span>{props.item?.email_address}</span>
                            </div>
                            <div className="py-2 border-b border-white-muted flex flex-col">
                                <span className="font-semibold uppercase">Contact Number</span>
                                <span>{props.item?.contact_number}</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="py-2 border-b border-white-muted flex flex-col">
                                <span className="font-semibold uppercase">Inquiry Type</span>
                                <span>{props.item?.inquiry_type}</span>
                            </div>
                            <div className="py-2 border-b border-white-muted flex flex-col">
                                <span className="font-semibold">File Attachment</span>
                                {props.item?.attachment && (
                                    <span onClick={() => window.open(props.item?.attachment, '_blank')} className="underline cursor-pointer" style={{ color: "#0000FF" }}>{props.item?.attachment?.split("/")?.[props.item?.attachment?.split("/")?.length - 1]}</span>
                                )}
                            </div>
                        </div>
                        <div className="pt-2 border-white-muted flex flex-col">
                            <span className="font-semibold">Subject</span>
                            <span>{props.item?.subject}</span>
                        </div>
                        <div className="pt-1 border-white-muted flex flex-col">
                            <span className="font-semibold">Message</span>
                            <span>{props.item?.message}</span>
                        </div>
                        <div className="flex-grow" />
                        <div className="flex justify-end mt-10">
                            <Button
                                className="bg-slate-700 text-white-light rounded-md"
                                onClick={onSave}
                            >
                                Back
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;