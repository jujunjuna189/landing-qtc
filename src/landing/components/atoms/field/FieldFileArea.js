import { useState } from "react";

const FileFileArea = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState({});

    const handleInputChange = (event) => {
        const imageFile = event.target.files[0];
        if (!imageFile) {
            console.log('Please select image.');
            return false;
        }

        props.onChange && props.onChange(imageFile);
        setData(imageFile);
    };

    return (
        <>
            <div className={`flex justify-center items-center rounded-lg border-slate-400 hover:border-violet-400 border-2 border-dashed relative ${props.className}`}>
                {!data.preview && (
                    <div>
                        <div className="flex justify-center mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                                <path d="M9 15l3 -3l3 3"></path>
                                <path d="M12 12l0 9"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-slate-500 text-center">{data.name ?? props.placeholder}</span>
                            {props.error && <small className="text-danger-dark pl-1 inline-block">{props.error}</small>}
                        </div>
                    </div>
                )}
                {data.preview && props.preview && <img src={data?.preview} alt="Preview_image" className={`h-full absolute object-contain ${data.width >= data.height && 'rounded-lg'}`} />}
                <input type='file' accept="*" className="w-full h-full absolute opacity-0 left-0 top-0 right-0 bottom-0 cursor-pointer" onChange={(event) => handleInputChange(event)} />
            </div>
        </>
    );
}

export default FileFileArea;