
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";
import { RouteName } from "../../../route";
import { img7, ptCircle } from "../../assets";
import { Content } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const CareerListPage = () => {
    const language = LandingLanguage[getLocalLanguage().key][RouteName.careerList];
    const navigation = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img7,
    ];

    useEffect(() => {
        images.forEach(preloadImage);
    }, [images]);

    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[20rem] -right-[20rem] w-[70%] opacity-10 " />
                <div className="w-full py-20 flex justify-start items-center px-20 bg-primary-dark">
                    <div className="grow flex flex-col gap-1 text-start">
                        <div className="">
                            <span className="text-white-light font-semibold">{language[1]}</span>
                        </div>
                        <span className="text-7xl text-white-light font-semibold">{language[2]}</span>
                        <div className="w-36 h-3 bg-secondary-dark mt-2" />
                    </div>
                </div>
            </div>
            <div className="relative gap-20 mt-20 pr-72">
                <div className="px-32 pt-5">
                    <div className="flex flex-col border-b border-primary-dark py-3">
                        <span className="font-medium text-primary-dark">{language[3.1]}</span>
                        <span className="text-primary-dark">
                            {language[3.2]}
                        </span>
                    </div>
                    <div className="flex flex-col border-b border-primary-dark py-3">
                        <span className="font-medium text-primary-dark">{language[4.1]}</span>
                        <span className="text-primary-dark">
                            {language[4.2]}
                        </span>
                    </div>
                    <div className="flex flex-col border-b border-primary-dark py-3">
                        <span className="font-medium text-primary-dark">{language[5.1]}</span>
                        <span className="text-primary-dark">
                            {language[5.2]}
                        </span>
                    </div>
                    <div className="flex flex-col border-b border-primary-dark py-3">
                        <span className="font-medium text-primary-dark">{language[6.1]}</span>
                        <span className="text-primary-dark">
                            {language[6.2]}
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-16 px-32">
                <div className="pr-72">
                    <span className="font-medium text-primary-dark">
                        {language[7]}
                    </span>
                </div>
            </div>
            <div className="flex gap-3 mt-16 px-32">
                <div className="border border-primary-dark bg-primary-dark flex flex-col justify-center items-center py-2 px-5 cursor-pointer" onClick={() => navigation(RouteName.careerExplore)}>
                    <i className="text-white-light font-semibold">
                        {language[8]}
                    </i>
                </div>
            </div>
            <div className="my-20" />
        </Content>
    );
}

export default CareerListPage;