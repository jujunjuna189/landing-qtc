import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../route";
import { img1 } from "../../assets";
import { Content } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const SustainabilityPage = () => {
    const navigation = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img1,
    ];

    useEffect(() => {
        images.forEach(preloadImage);
    }, [images]);

    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={images[0]} alt="Image5" className="object-cover object-center w-full h-[40vh]" loading="lazy" />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center px-24">
                    <div className="flex flex-col gap-3 text-center">
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>Commitment, Strategy, and</span>
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>Partnerships for Sustainable Success</span>
                    </div>
                </div>
            </div>
            <div className="py-20 relative">
                <div className="px-32">
                    <span className="text-2xl text-primary-dark font-semibold">Sustainability in Action</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[80%] text-justify">
                        <span className="text-primary-dark">
                            Quantum Trans Capital is committed to driving long-term success by integrating sustainability
                            principles across all aspects of its operations. With a strategy focused on innovation and efficiency,
                            the company prioritizes the use of cutting-edge technology and responsible resource management.
                        </span>
                    </div>
                    <div className="w-[80%] mt-10">
                        <span className="text-primary-dark">
                            Through strong partnerships and synergy with key stakeholders, Quantum Trans Capital aims to
                            create a lasting positive impact, foster inclusive economic growth, and contribute to the
                            development of environmentally and socially responsible sectors. With a forward-looking approach
                            to sustainability, Quantum Trans Capital is well-positioned to tackle future challenges and deliver
                            value for all involved.
                        </span>
                    </div>
                </div>
                {/* Image */}
                <div className="grid grid-cols-3 gap-3 mt-20 px-32">
                    <div className="border border-primary-dark bg-primary-dark flex flex-col justify-center items-center py-5 px-5 cursor-pointer" onClick={() => navigation(RouteName.sustainabilityCommitment)}>
                        <span className="text-3xl text-white-light font-semibold">
                            Commitment
                        </span>
                    </div>
                    <div className="border border-primary-dark bg-primary-dark flex flex-col justify-center items-center py-5 px-5 cursor-pointer" onClick={() => navigation(RouteName.sustainabilityStrategic)}>
                        <span className="text-3xl text-white-light font-semibold">
                            Our Strategy At QTC
                        </span>
                        <div className="w-full h-1 bg-secondary-dark mt-2" />
                    </div>
                    <div className="border border-primary-dark bg-primary-dark flex flex-col justify-center items-center py-5 px-5 cursor-pointer" onClick={() => navigation(RouteName.sustainabilityPartnerships)}>
                        <span className="text-3xl text-white-light font-semibold">
                            Partnerships
                        </span>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default SustainabilityPage;