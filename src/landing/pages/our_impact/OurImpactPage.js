import { useEffect } from "react";
import { img2, ptCircle } from "../../assets";
import { Content } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const OurImpactPage = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img2,
    ];

    useEffect(() => {
        images.forEach(preloadImage);
    }, [images]);

    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={images[0]} alt="Image5" className="object-cover object-center w-full h-[40vh] animate-fade animate-duration-400" loading="lazy" />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center px-24">
                    <div className="flex flex-col gap-3 text-center">
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>Driving Sustainable Innovation:</span>
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>Quantum Trans Capital's Impact</span>
                    </div>
                </div>
            </div>
            <div className="py-20 relative overflow-hidden">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[30rem] w-[70%] opacity-10 "/>
                <div className="px-32">
                    <span className="text-2xl text-primary-dark font-semibold">Our Impact</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[80%] text-justify">
                        <span className="text-primary-dark">
                            Through the management of a diversified and strategically integrated asset portfolio, Quantum Trans Capital is
                            dedicated to fostering sustainable economic growth and advancing innovation across key industrial sectors. Guided by a
                            disciplined investment strategy with a strong emphasis on ESG principles, we focus on creating long-term value for
                            stakeholders while generating meaningful societal and environmental benefits.
                        </span>
                    </div>
                    <div className="w-[80%] mt-10">
                        <span className="text-primary-dark">
                            The companies within Quantum Trans Capital's portfolio represent industry leaders recognized for their bold,
                            innovative approaches. Committed to advancing technological capabilities and implementing best practices, they drive
                            positive, far-reaching impacts across diverse sectors. By prioritizing strategic partnerships and sustainability, Quantum
                            Trans Capital consistently seeks solutions to address modern market challenges, contributing tangibly to inclusive and
                            sustainable economic growth.
                        </span>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default OurImpactPage;