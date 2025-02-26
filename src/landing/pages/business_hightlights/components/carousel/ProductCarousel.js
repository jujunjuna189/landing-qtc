import { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UseBusinessPreviewContext } from "../../../../contexts/business/BusinessPreviewContext";

const ProductCarousel = () => {
    const { product } = UseBusinessPreviewContext();
    const carouselRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
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
        (counter + 1) > product?.data?.length ? setCounter(1) : setCounter(counter + 1);
        carouselRef.current.next();  // Navigasi ke item berikutnya
    };

    const goToPrevious = () => {
        (counter - 1) < 1 ? setCounter(product?.data?.length) : setCounter(counter - 1);
        carouselRef.current.previous();  // Navigasi ke item sebelumnya
    };

    return (
        <div>
            <div className="flex items-center gap-5">
                <div className="border-2 border-primary-dark w-8 h-8 flex justify-center items-center rounded-full cursor-pointer absolute left-0 z-10 mx-5 opacity-50" onClick={() => goToPrevious()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-dark font-semibold" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
                </div>
                <Carousel ref={carouselRef} className="grow" draggable={false} arrows={false} responsive={responsive} infinite={true}>
                    {product?.data?.length === 1 && (
                        <div className="h-72 flex justify-center items-center">
                        </div>
                    )}
                    {product?.data?.map((item, index) => {
                        return (
                            <div key={index} className="h-72 flex justify-center items-center">
                                <img src={item.image} alt={item.image} className="w-100 object-cover" />
                            </div>
                        );
                    })}
                </Carousel>
                <div className="border-2 border-primary-dark w-8 h-8 flex justify-center items-center rounded-full cursor-pointer absolute right-0 z-10 mx-5 opacity-50" onClick={() => goToNext()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-dark font-semibold" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
            </div>
        </div>
    );
}

export default ProductCarousel;