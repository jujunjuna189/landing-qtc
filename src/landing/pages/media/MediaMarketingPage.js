
import { useEffect } from "react";
import { img7, ptCircle } from "../../assets";
import { Content } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const MediaMarketingPage = () => {
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
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[10rem] -right-[25rem] w-[70%] opacity-10 " />
                <div className="w-full pt-28 pb-16 flex justify-start items-center px-20 bg-primary-dark">
                    <div className="grow flex flex-col gap-1 text-start mt-10">
                        <div className="">
                            <span className="text-white-light font-semibold">Media</span>
                        </div>
                        <span className="text-7xl text-white-light font-semibold">Marketing Assets</span>
                        <div className="w-36 h-3 bg-secondary-dark mt-2" />
                        <div className="mt-10 w-[50%]">
                            <span className="text-white-light text-sm">
                                Our marketing assets are key resources to help showcase the brand, products and services of Quantum Trans Capital
                                and other subsidiaries Available to partners, media and internal teams, these materials ensure brand consistency and
                                support effective marketing initiatives.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 relative px-20">
                <div className="flex gap-2 items-center">
                    <span className="text-xl text-primary-dark font-semibold">Download assets</span>
                </div>
            </div>
            <div className="relative flex gap-20 px-20">
                <div className="w-72 min-w-72 max-w-72">
                    <span className="text-lg text-primary-dark font-semibold"> Available Category</span>
                    <ul className="mt-8">
                        <li className="pl-5 pr-20 py-2 bg-primary-dark cursor-pointer text-white-light font-semibold" onClick={() => { }}>Logo</li>
                        <li className="pl-5 pr-20 py-2  text-primary-dark cursor-pointer font-semibold" onClick={() => { }}>Company Profile</li>
                        <li className="pl-5 pr-20 py-2  text-primary-dark cursor-pointer font-semibold" onClick={() => { }}>Gallery Photo</li>
                    </ul>
                </div>
                <div className="border-l border-primary-dark grow px-16 pt-5 pb-28">
                    <div className="flex justify-between border-b border-primary-dark py-3 px-5">
                        <span className="font-medium text-primary-dark">Logo Quantum Trans Capital</span>
                        <div className="flex items-center gap-1 text-sm cursor-pointer" onClick={() => { }}>
                            <span className="text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                            </span>
                            <span className="text-primary-dark font-medium">Download</span>
                        </div>
                    </div>
                    <div className="flex justify-between border-b border-primary-dark py-3 px-5">
                        <span className="font-medium text-primary-dark">Logo Global Karya Bangsa</span>
                        <div className="flex items-center gap-1 text-sm cursor-pointer" onClick={() => { }}>
                            <span className="text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                            </span>
                            <span className="text-primary-dark font-medium">Download</span>
                        </div>
                    </div>
                    <div className="flex justify-between border-b border-primary-dark py-3 px-5">
                        <span className="font-medium text-primary-dark">Logo Matra Mandiri Prima</span>
                        <div className="flex items-center gap-1 text-sm cursor-pointer" onClick={() => { }}>
                            <span className="text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                            </span>
                            <span className="text-primary-dark font-medium">Download</span>
                        </div>
                    </div>
                    <div className="flex justify-between border-b border-primary-dark py-3 px-5">
                        <span className="font-medium text-primary-dark">Logo Daya Mandiri Terbarukan</span>
                        <div className="flex items-center gap-1 text-sm cursor-pointer" onClick={() => { }}>
                            <span className="text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                            </span>
                            <span className="text-primary-dark font-medium">Download</span>
                        </div>
                    </div>
                    <div className="flex justify-between border-b border-primary-dark py-3 px-5">
                        <span className="font-medium text-primary-dark">Logo Quantum Trans Capital</span>
                        <div className="flex items-center gap-1 text-sm cursor-pointer" onClick={() => { }}>
                            <span className="text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                            </span>
                            <span className="text-primary-dark font-medium">Download</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-40" />
        </Content>
    );
}

export default MediaMarketingPage;