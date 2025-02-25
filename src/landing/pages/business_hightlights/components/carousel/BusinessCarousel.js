import { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UseBusinessPreviewContext } from "../../../../contexts/business/BusinessPreviewContext";

const BusinessCarousel = (props) => {
    const { business } = UseBusinessPreviewContext();
    const carouselRef = useRef(null);
    const [counter, setCounter] = useState(1);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
        }
    };

    const goToNext = () => {
        (counter + 1) > business?.data?.length ? setCounter(1) : setCounter(counter + 1);
        props.onGet && props.onGet(business?.data?.[(counter + 1) > business?.data?.length ? 1 : (counter + 1) > business?.data?.length - 1 ? 0 : counter + 1]);
        carouselRef.current.next();  // Navigasi ke item berikutnya
    };

    const goToPrevious = () => {
        (counter - 1) < 1 ? setCounter(business?.data?.length) : setCounter(counter - 1);
        props.onGet && props.onGet(business?.data?.[counter - 1]);
        carouselRef.current.previous();  // Navigasi ke item sebelumnya
    };

    useEffect(() => {
        setTimeout(() => {
            var index = business?.data?.findIndex((x) => x.id === props.data?.id);
            carouselRef.current.goToSlide(index === 0 ? business?.data?.length - 2 : (business?.data?.length - 2) + index);
            setCounter(index === 0 ? business.data?.length : index);
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex items-center gap-5 w-[40rem] h-[10rem]">
            <div className="text-primary-light flex justify-start items-center cursor-pointer" onClick={() => goToPrevious()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
            </div>
            <Carousel ref={carouselRef} className="grow" draggable={false} arrows={false} responsive={responsive} infinite={true}>
                {business?.data?.map((item, index) => {
                    return (
                        <div key={index} className={`text-center text-primary-dark transition-all duration-300 ${counter === (index === 0 ? business?.data?.length : index) ? '' : 'pt-3'}`}>
                            <div className="flex justify-center">
                                <div className={`border border-primary-dark rounded-full overflow-hidden transition-all duration-300 ${counter === (index === 0 ? business?.data?.length : index) ? "w-[7rem] h-[7rem]" : "w-[5rem] h-[5rem]"}`}>
                                    <img src={item.logo} alt="Capital Investment" className="transition-width duration-300" width={counter === (index === 0 ? business?.data?.length : index) ? 130 : 100} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
            <div className="text-primary-light flex justify-end items-center cursor-pointer" onClick={() => goToNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
            </div>
        </div>
    );
}

export default BusinessCarousel;