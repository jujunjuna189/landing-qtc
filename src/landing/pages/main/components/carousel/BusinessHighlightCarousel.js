import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UseMainContext } from "../../../../contexts/main/MainContext";

const BusinessHighlightCarousel = () => {
    const carouselRef = useRef(null);
    const { language, images } = UseMainContext();
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const goToNext = () => {
        carouselRef.current.next();  // Navigasi ke item berikutnya
    };

    const goToPrevious = () => {
        carouselRef.current.previous();  // Navigasi ke item sebelumnya
    };

    return (
        <>
            <div className="absolute top-10 right-32 z-10">
                <div className="flex gap-3">
                    <div className="text-white-light flex justify-start items-center" onClick={() => goToPrevious()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 15l-3 -3l3 -3" /><path d="M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z" /></svg>
                    </div>
                    <div className="text-white-light flex justify-end items-center" onClick={() => goToNext()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 9l3 3l-3 3" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" /></svg>
                    </div>
                </div>
            </div>
            <Carousel ref={carouselRef} arrows={false} responsive={responsive}>
                <div>
                    <div className="absolute top-0 bottom-0 left-0 right-0">
                        <img src={images[3]} alt="Image5" className="object-cover object-bottom h-full w-full animate-fade animate-duration-400" loading="lazy" />
                    </div>
                    <div className="py-28 relative">
                        <div className="px-32">
                            <span className="text-2xl text-primary-dark font-medium">{language[10]}</span>
                            <div className="w-12 h-1 bg-secondary-dark" />
                        </div>
                        <div className="flex flex-col px-36 mt-12">
                            <div className="w-[50%]">
                                <span className="text-primary-dark font-medium">
                                    {language[11]}
                                </span>
                            </div>
                        </div>
                        <div className="h-[40vh]" />
                        <div className="flex items-center gap-3 px-36">
                            <span className="text-secondary-dark text-5xl font-medium" style={{ textShadow: "0px 1px 10px #4B4B4B" }}>o</span>
                            <div className="mt-1">
                                <span className="text-white-light text-4xl font-medium" style={{ textShadow: "0px 1px 10px #4B4B4B" }}>{language[12]}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="absolute top-0 bottom-0 left-0 right-0">
                        <img src={images[2]} alt="Image5" className="object-cover object-bottom h-full w-full animate-fade animate-duration-400" loading="lazy" />
                    </div>
                    <div className="py-28 relative">
                        <div className="px-32">
                            <span className="text-2xl text-primary-dark font-medium">{language[10]}</span>
                            <div className="w-12 h-1 bg-secondary-dark" />
                        </div>
                        <div className="flex flex-col px-36 mt-12">
                            <div className="w-[50%]">
                                <span className="text-primary-dark font-medium">
                                    {language[11]}
                                </span>
                            </div>
                        </div>
                        <div className="h-[40vh]" />
                        <div className="flex items-center gap-3 px-36">
                            <span className="text-secondary-dark text-5xl font-medium" style={{ textShadow: "0px 1px 10px #4B4B4B" }}>o</span>
                            <div className="mt-1">
                                <span className="text-white-light text-4xl font-medium" style={{ textShadow: "0px 1px 10px #4B4B4B" }}>{language[12]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    );
}

export default BusinessHighlightCarousel;