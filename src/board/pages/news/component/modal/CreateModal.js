import { useEffect, useRef, useState } from "react";
import { Button, FieldDate, FieldFile, FieldText } from "../../../../components";
import { createNewsApi } from "../../../../helpers";

const CreateModal = (props) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [controller, setController] = useState({});
    const [errors, setErrors] = useState({});

    const toggleModal = () => {
        setIsVisible((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    const onSetController = ({ field, value }) => {
        setController({ ...controller, [field]: value });
    }

    const onSave = async () => {
        var dataBatch = { ...controller };
        dataBatch.image = controller.image?.file;
        await createNewsApi({ body: dataBatch }).then((res) => {
            res?.errors && setErrors(res?.errors);
            if (!res?.errors) {
                setErrors({});
                toggleModal();
                props.onSave && props.onSave();
            }
        });
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
                        <div className="flex gap-5 items-center">
                            <div>
                                <div className="w-32 h-32 bg-slate-100 flex justify-center items-center relative">
                                    {controller?.image?.preview && (<div className="w-full h-full absolute bg-slate-100">
                                        <img src={controller?.image?.preview} alt="ImageProfile" className="object-cover w-full h-full" />
                                    </div>)}
                                    {!controller?.image?.preview && (
                                        <div className="flex flex-col gap-1 text-center text-slate-300">
                                            <div className="flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8h.01" /><path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" /><path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" /><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /></svg>
                                            </div>
                                            <span className="font-medium">Image</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="grow">
                                <div className="mb-2">
                                    <span className="font-medium">Unggah Image</span><br />
                                    <small>Choose a image and upload it here...</small>
                                </div>
                                <div className="flex">
                                    <FieldFile label="Upload Image" onChange={(value) => onSetController({ field: 'image', value: value })} />
                                    <span className="text-danger-dark">{errors.image}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <label>Title</label>
                            <FieldText placeholder="..." error={errors.title} value={controller.title} onChange={(value) => onSetController({ field: 'title', value: value })} />
                        </div>
                        <div className="mt-3">
                            <label>Date</label>
                            <FieldDate placeholder="..." error={errors.date} value={controller.date} onChange={(value) => onSetController({ field: 'date', value: value })} />
                        </div>
                        <div>
                            <label>Redirect</label>
                            <FieldText placeholder="https://" error={errors.redirect} value={controller.redirect} onChange={(value) => onSetController({ field: 'redirect', value: value })} />
                        </div>
                        <div className="flex-grow" />
                        <div className="flex justify-end mt-3">
                            <Button
                                className="bg-slate-700 text-white-light rounded-md"
                                onClick={onSave}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateModal;