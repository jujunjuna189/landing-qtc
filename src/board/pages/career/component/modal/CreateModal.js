import { useEffect, useRef, useState } from "react";
import { Button, FieldDate, FieldEditor, FieldText } from "../../../../components";
import { createCareerApi } from "../../../../helpers";

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
        await createCareerApi({ body: dataBatch }).then((res) => {
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
                    <span className="border-dark-muted text-sm">Add New Career</span>
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
                        <span className="text-base font-medium">Add New Career</span>
                        <br />
                        <small>Please fill in the career data form</small>
                    </div>
                    <div className="min-h-[25vh] flex flex-col gap-1 my-2 overflow-y-auto max-h-[70vh]">
                        <div className="mt-3">
                            <label>Title</label>
                            <FieldText placeholder="..." error={errors.title} value={controller.title} onChange={(value) => onSetController({ field: 'title', value: value })} />
                        </div>
                        <div className="mt-3">
                            <label>Location</label>
                            <FieldText placeholder="..." error={errors.location} value={controller.location} onChange={(value) => onSetController({ field: 'location', value: value })} />
                        </div>
                        <div className="mt-3">
                            <label>Posting Date</label>
                            <FieldDate placeholder="..." error={errors.posting_date} value={controller.posting_date} onChange={(value) => onSetController({ field: 'posting_date', value: value })} />
                        </div>
                        <div className="mt-3">
                            <label>Apply Before</label>
                            <FieldDate placeholder="..." error={errors.apply_before} value={controller.apply_before} onChange={(value) => onSetController({ field: 'apply_before', value: value })} />
                        </div>
                        <div className="mt-3">
                            <label>Job Indentification</label>
                            <FieldText placeholder="..." error={errors.identification} value={controller.identification} onChange={(value) => onSetController({ field: 'identification', value: value })} />
                        </div>
                        <div className="mt-3">
                            <label>Job Category</label>
                            <FieldText placeholder="..." error={errors.category} value={controller.category} onChange={(value) => onSetController({ field: 'category', value: value })} />
                        </div>
                        <div className="mt-3">
                            <label>Job Schedule</label>
                            <FieldText placeholder="..." error={errors.schedule} value={controller.schedule} onChange={(value) => onSetController({ field: 'schedule', value: value })} />
                        </div>
                        <div className="mt-3">
                            <label>Degree Level</label>
                            <FieldText placeholder="..." error={errors.degree_level} value={controller.degree_level} onChange={(value) => onSetController({ field: 'degree_level', value: value })} />
                        </div>
                        <div className="mt-3">
                            <label>Status</label>
                            <FieldText placeholder="..." error={errors.status} value={controller.status} onChange={(value) => onSetController({ field: 'status', value: value })} />
                        </div>
                        <div className="mt-3">
                            <label>Job Description</label>
                            <FieldEditor placeholder="..." error={errors.description} value={controller.description} onChange={(value) => onSetController({ field: 'description', value: value })} />
                        </div>
                        <div className="flex-grow" />
                    </div>
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
    );
};

export default CreateModal;