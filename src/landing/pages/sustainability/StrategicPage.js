
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../route";
import { Content } from "../../components";
import { ptCircle } from "../../assets";
import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";

const StrategicPage = () => {
    const language = LandingLanguage[getLocalLanguage().key][RouteName.sustainabilityStrategic];
    const navigation = useNavigate();
    return (
        <Content navbar={{ style_nav: "text-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[25rem] -right-[20rem] w-[60%] opacity-10 " />
                <div className="w-full h-[40vh] flex justify-start items-center px-24 bg-primary-dark">
                    <div className="flex flex-col gap-1 text-start mt-20">
                        <span className="text-white-light font-semibold">{language[1]}</span>
                        <span className="text-7xl text-white-light font-semibold">{language[2]}</span>
                        <div className="w-36 h-3 bg-secondary-dark mt-2" />
                    </div>
                </div>
            </div>
            <div className="py-10 relative px-20">
                <div className="flex gap-2 items-center">
                    <span className="text-xl text-primary-dark font-semibold">Sustainability in</span>
                    <div className="py-1 px-2 text-xl font-medium bg-secondary-dark text-white-light">Action</div>
                </div>
            </div>
            <div className="relative flex gap-20 px-20">
                <div className="w-72 min-w-72 max-w-72">
                    <ul>
                        <li className="pl-5 pr-20 py-2 hover:bg-white-muted text-primary-dark border-b cursor-pointer border-primary-dark font-semibold" onClick={() => navigation(RouteName.sustainabilityCommitment)}>Commitment</li>
                        <li className="pl-5 pr-20 py-2 bg-primary-dark border-b cursor-pointer border-primary-dark text-white-light font-semibold" onClick={() => navigation(RouteName.sustainabilityStrategic)}>Our Strategic at QTC</li>
                        <li className="pl-5 pr-20 py-2 hover:bg-white-muted text-primary-dark border-b cursor-pointer border-primary-dark font-semibold" onClick={() => navigation(RouteName.sustainabilityPartnerships)}>Partnerships</li>
                    </ul>
                </div>
                <div className="bg-gray-dark grow p-16">
                    <span className="text-2xl text-primary-dark font-semibold">
                        {language[3]}
                    </span>
                    <div className="mt-10">
                        <span className="text-primary-dark">
                            {language[4]}
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-primary-dark">
                            {language[5]}
                        </span>
                    </div>
                    <div className="mt-10">
                        <span className="text-primary-dark">
                            {language[6]}
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-primary-dark">
                            {language[7]}
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-primary-dark">
                            {language[8]}
                        </span>
                    </div>
                </div>
            </div>
            <div className="my-40" />
        </Content>
    );
}

export default StrategicPage;