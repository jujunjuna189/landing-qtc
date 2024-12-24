
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../route";
import { img7 } from "../../assets";
import { Content } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const CareerExplorePage = () => {
    const navigation = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img7,
    ];

    useEffect(() => {
        images.forEach(preloadImage);
    }, [images]);

    return (
        <Content navbar={{ style_nav: "text-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <div className="w-full pt-28 pb-16 flex justify-start items-center px-20 bg-primary-dark">
                    <div className="grow flex flex-col gap-1 text-start mt-10">
                        <div className="">
                            <span className="text-white-light font-semibold">Career</span>
                        </div>
                        <span className="text-7xl text-white-light font-semibold">Explore our current</span>
                        <span className="text-7xl text-white-light font-semibold">job opportunities</span>
                        <div className="w-36 h-3 bg-secondary-dark mt-5" />
                    </div>
                </div>
            </div>
            <div className="my-32" />
            <div className="relative flex gap-20 px-20 h-[20vh] justify-center items-center">
                <div className="border border-primary-dark flex">
                    <div className="grow flex flex-col justify-center pl-10 pr-60">
                        <span className="font-medium text-primary-dark">FIND JOBS</span>
                        <div className="mt-5">
                            <span className="text-primary-dark">Job title, skill, keyword</span>
                        </div>
                    </div>
                    <div className="border-l border-primary-dark my-5" />
                    <div className="flex flex-col justify-center pl-10 pr-20">
                        <span className="font-medium text-primary-dark">NEAR LOCATION</span>
                        <div className="mt-5">
                            <span className="text-primary-dark">City, state, country</span>
                        </div>
                    </div>
                    <div className="bg-gray-dark flex items-center px-9 py-9">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-white-light" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <div className="cursor-pointer" onClick={() => navigation(RouteName.careerList)}>
                    <span className="font-bold text-primary-dark">ALL JOBS (13)</span>
                </div>
            </div>
            <div className="my-32" />
        </Content>
    );
}

export default CareerExplorePage;