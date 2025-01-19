import { useEffect, useRef, useState } from "react";
import { Button, FieldFile, FieldSelect, FieldText } from "../../../../components";
import { getBusinessApi, updateProductApi } from "../../../../helpers";

const UpdateModal = (props) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [controller, setController] = useState({});
    const [errors, setErrors] = useState({});
    const [business, setBusiness] = useState([]);

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
            name: props.item?.name,
            business: {
                title: props.item?.business?.name,
                value: props.item?.business?.id,
            },
            image: {
                preview: props.item?.image,
            }
        });
    }

    const onSetController = ({ field, value }) => {
        setController({ ...controller, [field]: value });
    }

    const getBusiness = async () => {
        await getBusinessApi({}).then((res) => {
            var data = [];
            (res?.data ?? []).forEach((item, index) => {
                data.push({ title: item.name, value: item.id });
            });
            setBusiness(data);
        });
    }

    const onSave = async () => {
        var dataBatch = { ...controller };
        dataBatch.business_id = controller.business?.value
        dataBatch.image = controller.image?.file;
        delete dataBatch.business;
        await updateProductApi({ id: props.item?.id, body: dataBatch }).then((res) => {
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
                        <span className="text-base font-medium">Update Product</span>
                        <br />
                        <small>Please fill in the product data form</small>
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
                            <label>Business</label>
                            <FieldSelect placeholder="..." error={errors.business?.title} value={controller.business?.title} data={business} onFocus={() => getBusiness()} onChange={(value) => onSetController({ field: 'business', value: value })} />
                        </div>
                        <div className="mt-3">
                            <label>Name</label>
                            <FieldText placeholder="..." error={errors.name} value={controller.name} onChange={(value) => onSetController({ field: 'name', value: value })} />
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

export default UpdateModal;