import { useEffect } from "react";
import { img6, lgGkb, ptCircle } from "../../assets";
import { Content } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const BusinessPreviewPage = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img6,
        lgGkb,
    ];

    useEffect(() => {
        images.forEach(preloadImage);
    }, [images]);

    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={images[0]} alt="Image5" className="object-cover object-bottom w-full h-[70vh] animate-fade animate-duration-400 animate-duration-400" loading="lazy" />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-start items-center px-24">
                    <div className="flex flex-col gap-10 text-start">
                        <span className="text-8xl text-white-light font-semibold">Leading For Solar</span>
                        <span className="text-8xl text-white-light font-semibold">PV Technology</span>
                    </div>
                </div>
            </div>
            {/* Who we are */}
            <div className="pt-32 pb-32 relative flex flex-row px-20">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[20rem] w-[70%] opacity-10 " />
                <div className="grow w-[50rem] flex justify-center">
                    <img src={images[1]} alt="Image5" className="object-contain object-bottom aspect-video h-[10rem] animate-fade animate-duration-400" loading="lazy" />
                </div>
                <div className="grow h-full">
                    <div className="px-20">
                        <span className="text-3xl text-primary-dark font-semibold">Global Karya Bangsa</span>
                        <div className="w-12 h-1 bg-secondary-dark" />
                    </div>
                    <div className="flex flex-col gap-6 px-20 mt-12">
                        <span className="text-primary-dark">
                            Global Karya Bangsa (GKB) aims to bring positive values by advancing solar panel
                            technology and promoting its adoption  worldwide.
                        </span>
                        <span className="text-primary-dark">
                            We  operate  as  the  Global  Strategic  Center  responsible  for overseeing Marketing
                            and Technical Development, as well as Intellectual Property management, within the
                            realm of Solar PV Technology.
                        </span>
                    </div>
                    <div className="mt-20 flex gap-3 text-primary-dark px-20 font-semibold">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                        </span>
                        <span>
                            Go To The Website Page Global Karya Bangsa
                        </span>
                    </div>
                </div>
            </div>
            {/* Bussines */}
            <div className="grid grid-cols-3 my-10">
                <div className="h-72 border border-primary-dark flex justify-center items-center">
                    <span className="font-bold text-2xl text-primary-dark">Product</span>
                </div>
                <div className="h-72 border border-primary-dark flex justify-center items-center">
                    <span className="font-bold text-2xl text-primary-dark">Product</span>
                </div>
                <div className="h-72 border border-primary-dark flex justify-center items-center">
                    <span className="font-bold text-2xl text-primary-dark">Product</span>
                </div>
            </div>
            <div className="flex justify-center items-end gap-3">
                <div className="border-2 border-primary-dark w-8 h-8 flex justify-center items-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-dark font-semibold" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
                </div>
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary-dark rounded-full"></div>
                    <div className="w-2 h-2 border border-primary-dark rounded-full"></div>
                    <div className="w-2 h-2 border border-primary-dark rounded-full"></div>
                    <div className="w-2 h-2 border border-primary-dark rounded-full"></div>
                </div>
                <div className="border-2 border-primary-dark w-8 h-8 flex justify-center items-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-dark font-semibold" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
            </div>
            <div className="flex justify-center items-center gap-10 mt-20 mb-10">
                <div className="w-8 h-8 flex justify-center items-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-dark font-semibold" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
                </div>
                <div className="flex gap-8 items-center">
                    <div className="w-16 h-16 border border-primary-dark rounded-full"></div>
                    <div className="w-24 h-24 border border-primary-dark rounded-full"></div>
                    <div className="w-16 h-16 border border-primary-dark rounded-full"></div>
                </div>
                <div className="w-8 h-8 flex justify-center items-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-dark font-semibold" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
            </div>
        </Content>
    );
}

export default BusinessPreviewPage;