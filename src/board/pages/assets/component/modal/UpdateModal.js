import { useEffect, useRef, useState } from "react";
import { Button, FieldFileAll, FieldSelect, FieldText } from "../../../../components";
import { updateAssetsMarketingApi } from "../../../../helpers";

const UpdateModal = (props) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [controller, setController] = useState({});
    const [errors, setErrors] = useState({});

    const toggleModal = () => {
        setIsVisible((prev) => !prev);
        if (isVisible !== true) firstSettingController();
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    const firstSettingController = () => {
        setController({
            ...props.item,
            type: {
                title: props.item?.type,
                value: props.item?.type,
            },
            file: {
                name: props.item.file.substring(0, 55) + '...',
            },
        });
    }

    const onSetController = ({ field, value }) => {
        setController({ ...controller, [field]: value });
    }

    const onSave = async () => {
        var dataBatch = { ...controller };
        dataBatch.type = controller.type?.value;
        await updateAssetsMarketingApi({ id: props.item?.id, body: dataBatch }).then((res) => {
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
                <Button className="rounded-md text-sm border border-dark-muted bg-transparent py-[6px] pl-[10px] pr-[6px] font-normal">
                    <span>Update</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.828 2a3 3 0 0 1 1.977 .743l.145 .136l1.171 1.17a3 3 0 0 1 .136 4.1l-.136 .144l-1.706 1.707l2.292 2.293a1 1 0 0 1 .083 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.292 -3.293l-1.586 -1.585l-7.464 7.464a3.828 3.828 0 0 1 -2.474 1.114l-.233 .008c-.674 0 -1.33 -.178 -1.905 -.508l-1.216 1.214a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.214 -1.216a3.828 3.828 0 0 1 .454 -4.442l.16 -.17l10.586 -10.586a3 3 0 0 1 1.923 -.873l.198 -.006zm0 2a1 1 0 0 0 -.608 .206l-.099 .087l-1.707 1.707l2.586 2.585l1.707 -1.706a1 1 0 0 0 .284 -.576l.01 -.131a1 1 0 0 0 -.207 -.609l-.087 -.099l-1.171 -1.171a1 1 0 0 0 -.708 -.293z" /></svg>
                </Button>
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
                        <span className="text-base font-medium">Update Assets</span>
                        <br />
                        <small>Please fill in the assets data form</small>
                    </div>
                    <div className="min-h-[25vh] flex flex-col gap-1 my-2 overflow-y-auto max-h-[70vh]">
                        <div className="mt-3">
                            <label>Type</label>
                            <FieldSelect placeholder="..." error={errors.type} value={controller.type?.title} data={[{ title: 'Logo', value: 'logo' }, { title: 'Company Profile', value: 'company-profile' }]} onFocus={() => { }} onChange={(value) => onSetController({ field: 'type', value: value })} />
                        </div>
                        <div>
                            <span className="font-medium">Unggah File</span>
                            <div className="flex gap-2 items-center border rounded-lg pl-2 mt-2">
                                <div className="grow">{controller.file?.name ? <span className="">{controller.file?.name}</span> : <span className="text-slate-400">...</span>}</div>
                                <FieldFileAll error={errors.file} onChange={(value) => onSetController({ field: 'file', value: value })} />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label>Title</label>
                            <FieldText placeholder="..." error={errors.title} value={controller.title} onChange={(value) => onSetController({ field: 'title', value: value })} />
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

export default UpdateModal;