import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ic1, ic2, ic3, ic4, ic5, ic6, ic7, ic8 } from "../../../../assets";

const OurImpactCarousel = () => {
    const carouselRef = useRef(null);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const goToNext = () => {
        carouselRef.current.next();  // Navigasi ke item berikutnya
    };

    const goToPrevious = () => {
        carouselRef.current.previous();  // Navigasi ke item sebelumnya
    };

    return (
        <div className="flex items-center gap-5">
            <div className="bg-gray-dark text-primary-light flex justify-start items-center" onClick={() => goToPrevious()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 15l-3 -3l3 -3" /><path d="M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z" /></svg>
            </div>
            <Carousel ref={carouselRef} className="grow" arrows={false} responsive={responsive}>
                <div className="text-center text-primary-dark">
                    <div className="flex justify-center mb-5">
                        <img src={ic1} alt="Capital Investment" width={90} />
                    </div>
                    <span>Capital Investment</span>
                </div>
                <div className="text-center text-primary-dark">
                    <div className="flex justify-center mb-5">
                        <img src={ic2} alt="Capital Investment" width={90} />
                    </div>
                    <span>EPC</span>
                </div>
                <div className="text-center text-primary-dark">
                    <div className="flex justify-center mb-5">
                        <img src={ic3} alt="Capital Investment" width={90} />
                    </div>
                    <span>Renewable Energy</span>
                </div>
                <div className="text-center text-primary-dark">
                    <div className="flex justify-center mb-5">
                        <img src={ic4} alt="Capital Investment" width={90} />
                    </div>
                    <span>Industrial</span>
                </div>
                <div className="text-center text-primary-dark">
                    <div className="flex justify-center mb-5">
                        <img src={ic5} alt="Capital Investment" width={90} />
                    </div>
                    <span>Integrated Telecomunication</span>
                </div>
                <div className="text-center text-primary-dark">
                    <div className="flex justify-center mb-5">
                        <img src={ic6} alt="Capital Investment" width={90} />
                    </div>
                    <span>Real Estate {'&'} Property</span>
                </div>
                <div className="text-center text-primary-dark">
                    <div className="flex justify-center mb-5">
                        <img src={ic7} alt="Capital Investment" width={90} />
                    </div>
                    <span>Developer</span>
                </div>
                <div className="text-center text-primary-dark">
                    <div className="flex justify-center mb-5">
                        <img src={ic8} alt="Capital Investment" width={90} />
                    </div>
                    <span>Research and Development</span>
                </div>
            </Carousel>
            <div className="bg-gray-dark text-primary-light flex justify-end items-center" onClick={() => goToNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 9l3 3l-3 3" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" /></svg>
            </div>
        </div>
    );
}

export default OurImpactCarousel;