import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/atoms";
import DetailCareerModal from "./DetailCareerModal";

const DetailModal = (props) => {
    const ref = useRef();
    const [element, setElement] = useState(<></>);
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
        <>
            <div className="inline-block" ref={ref}>
                {/* Button to toggle modal */}
                <div className="cursor-pointer" onClick={toggleModal}>
                    {props.children}
                </div>

                {/* Modal */}
                <div
                    className={`fixed top-0 left-0 w-full h-full flex justify-center items-start z-10 transition-opacity duration-300 overflow-y-auto ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                >
                    {/* Overlay */}
                    <div
                        className="fixed w-full h-full bg-dark-dark bg-opacity-75"
                        onClick={toggleModal}
                    ></div>

                    {/* Modal Content */}
                    <div
                        className={`relative p-5 mt-10 mb-10 border border-white-muted rounded-lg bg-white-light w-[652px] z-20 shadow-all transform transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-10"
                            }`}
                    >
                        <div className="leading-3">
                            <span className="text-base font-medium">Detail Career Apply</span>
                            <br />
                        </div>
                        <div className="border border-white-muted rounded-md my-2 px-3 py-2">
                            <small>Career</small>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="leading-3 flex flex-col">
                                        <span className="font-semibold uppercase">{props.item?.career?.title}</span>
                                        <small>{props.item?.career?.location}</small>
                                    </div>
                                </div>
                                <div>
                                    <Button className="bg-transparent text-primary-dark border-primary-dark border rounded-md py-[2px]" onClick={() => { setElement(<DetailCareerModal item={props.item?.career} onClose={() => setElement(null)} />); setIsVisible(false) }}>
                                        <small>View</small>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="min-h-[25vh] flex flex-col gap-1 my-2 px-2">
                            <div className="grid grid-cols-3">
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-semibold uppercase">First Name</span>
                                    <span>{props.item?.first_name}</span>
                                </div>
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-semibold uppercase">Middle Name</span>
                                    <span>{props.item?.middle_name}</span>
                                </div>
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-semibold uppercase">Last Name</span>
                                    <span>{props.item?.last_name}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-semibold uppercase">Email</span>
                                    <span>{props.item?.email}</span>
                                </div>
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-semibold uppercase">Phone Number</span>
                                    <span>{props.item?.country_code}{props.item?.phone_number}</span>
                                </div>
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-semibold uppercase">Gender</span>
                                    <span>{props.item?.gender}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-semibold uppercase">Marital Status</span>
                                    <span>{props.item?.marital_status}</span>
                                </div>
                            </div>
                            <hr className="border-white-muted" />
                            <span className="font-semibold uppercase">Address</span>
                            <div className="grid grid-cols-4">
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-medium uppercase">City</span>
                                    <span>{props.item?.city}</span>
                                </div>
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-medium uppercase">Province</span>
                                    <span>{props.item?.province}</span>
                                </div>
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-medium uppercase">Country</span>
                                    <span>{props.item?.country}</span>
                                </div>
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-medium uppercase">Postal Code</span>
                                    <span>{props.item?.postal_code}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-medium uppercase">Full Address</span>
                                    <span>{props.item?.address}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-medium uppercase">Current Address</span>
                                    <span>{props.item?.current_location}</span>
                                </div>
                            </div>
                            <hr className="border-white-muted" />
                            <span className="font-semibold uppercase">Document</span>
                            <div className="grid grid-cols-1">
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-medium uppercase">Resume</span>
                                    {props.item?.resume && (
                                        <span onClick={() => window.open(props.item?.resume, '_blank')} className="underline cursor-pointer" style={{ color: "#0000FF" }}>{props.item?.resume?.split("/")?.[props.item?.resume?.split("/")?.length - 1]}</span>
                                    )}
                                </div>
                                <div className="py-2 border-b border-white-muted flex flex-col">
                                    <span className="font-medium uppercase">Support Document</span>
                                    {props.item?.support_document && (
                                        <span onClick={() => window.open(props.item?.support_document, '_blank')} className="underline cursor-pointer" style={{ color: "#0000FF" }}>{props.item?.support_document?.split("/")?.[props.item?.support_document?.split("/")?.length - 1]}</span>
                                    )}
                                </div>
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
            {element}
        </>
    );
};

export default DetailModal;