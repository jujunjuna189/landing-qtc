import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";
import { RouteName } from "../../../route";
import { img1, ptCircle } from "../../assets";
import { Content } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const SustainabilityPage = () => {
    const language = LandingLanguage[getLocalLanguage().key][RouteName.sustainability];
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
                <img src={images[0]} alt="Image5" className="object-cover object-center w-full h-[40vh] animate-fade animate-duration-400" loading="lazy" />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center px-24">
                    <div className="flex flex-col gap-3 text-center">
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>{language[1.1]}</span>
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>{language[1.2]}</span>
                    </div>
                </div>
            </div>
            <div className="py-20 relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[20rem] w-[70%] opacity-10 " />
                <div className="px-32">
                    <span className="text-2xl text-primary-dark font-semibold">{language[2]}</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[80%] text-justify">
                        <span className="text-primary-dark">
                            {language[3]}
                        </span>
                    </div>
                    <div className="w-[80%] mt-10">
                        <span className="text-primary-dark">
                            {language[4]}
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