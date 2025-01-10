import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/atoms";

const CreateModal = (props) => {
    const ref = useRef();
    const [isShow, setIsShow] = useState(false);
    // const [controller, setController] = useState({});
    // const [errors, setErrors] = useState({});

    const toogleModal = () => {
        setIsShow(!isShow);
    };

    const handleClickOutside = (event) => {
        if (!ref?.current?.contains(event.target)) {
            setIsShow(false);
        }
    };

    // const onSetController = (field, value) => {
    //     setController({ ...controller, [field]: value });
    // };

    const onSave = async () => {
        console.log("Oke");
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="inline-block" ref={ref}>
            <div className="cursor-pointer" onClick={() => toogleModal()}>
                <div className="flex gap-2 justify-center items-center border rounded-full border-dark-muted pl-4 pr-2 py-1 cursor-pointer">
                    <span className="border-dark-muted text-sm">Add New Business</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-dark" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" /></svg>
                    </span>
                </div>
            </div>
            <div className={`fixed top-0 bottom-0 left-0 right-0 flex justify-center items-start z-10 ${!isShow && "hidden"}`}>
                <div className="absolute w-full h-full bg-dark-dark bg-opacity-75 opacity-30 z-10" onClick={() => toogleModal()}></div>
                <div className="p-3 border border-white-muted rounded-lg bg-white-light w-[652px] z-10 max-h-screen overflow-y-auto my-5 shadow-all">
                    <div className="leading-3">
                        <span className="text-base font-medium">Tambah Data purnawirawan</span>
                        <br />
                        <small>Silahkan isi form data purnawirawan</small>
                    </div>
                    <div className="min-h-[25vh] flex flex-col gap-1 my-2">
                        <span>Oke</span>
                        <div className="flex-grow" />
                        <div className="flex justify-end mt-3">
                            <Button className="bg-slate-700 text-white rounded-md text-white-light" onClick={() => onSave()}>
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