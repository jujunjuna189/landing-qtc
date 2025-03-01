import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";
import { RouteName } from "../../../route";
import { imgDVLP1, imgDVLP2, imgDVLP3, ptCircle } from "../../assets";
import { Content } from "../../components";

const DevelopmentPage = () => {
    const language = LandingLanguage[getLocalLanguage().key][RouteName.developer];
    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            <div className="py-20 relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[30rem] w-[70%] opacity-10 " />
                <div className="px-32">
                    <span className="text-4xl text-primary-dark font-semibold">{language[1]}</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[50%] text-justify">
                        <span className="text-primary-dark">
                            {language[2]}
                        </span>
                    </div>
                    <div className="w-[50%] mt-10">
                        <span className="text-primary-dark">
                            {language[3]}
                        </span>
                    </div>
                </div>
            </div>
            {/* Image */}
            <div className="grid grid-cols-3">
                <div className="flex justify-center items-center h-[25rem]">
                    <img src={imgDVLP1} alt="assets" className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-center items-center h-[25rem]">
                    <img src={imgDVLP2} alt="assets" className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-center items-center h-[25rem]">
                    <img src={imgDVLP3} alt="assets" className="w-full h-full object-cover" />
                </div>
            </div>
        </Content>
    );
}

export default DevelopmentPage;