
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../route";
import { Content } from "../../components";
import { ptCircle } from "../../assets";
import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";

const CareerPage = () => {
    const language = LandingLanguage[getLocalLanguage().key][RouteName.career];
    const navigation = useNavigate();
    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[20rem] -right-[20rem] w-[60%] opacity-10 " />
                <div className="w-full h-[40vh] flex justify-start items-center px-24 bg-primary-dark">
                    <div className="flex flex-col gap-1 text-start">
                        <span className="text-white-light font-semibold">{language[1]}</span>
                        <span className="text-7xl text-white-light font-semibold">{language[2]}</span>
                        <div className="w-36 h-3 bg-secondary-dark mt-2" />
                    </div>
                </div>
            </div>
            <div className="py-20 relative">
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[60%] text-justify">
                        <span className="text-primary-dark">
                            {language[3]}
                        </span>
                    </div>
                    <div className="w-[60%] mt-10">
                        <span className="text-primary-dark">
                            {language[4]}
                        </span>
                    </div>
                </div>
                {/* Image */}
                <div className="flex gap-3 mt-16 px-32">
                    <div className="border border-primary-dark bg-primary-dark flex flex-col justify-center items-center py-2 px-5 cursor-pointer" onClick={() => navigation(RouteName.careerExplore)}>
                        <i className="text-white-light font-semibold">
                            {language[5]}
                        </i>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default CareerPage;