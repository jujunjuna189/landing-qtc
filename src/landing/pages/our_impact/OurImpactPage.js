import { RouteName } from "../../../route";
import { ic1, ic2, ic3, ic4, ic5, ic6, ic7, ic8, ptCircle } from "../../assets";
import { Content } from "../../components";
import { UseOurImpactContext } from "../../contexts/our_impact/OurImpactContext";

const OurImpactPage = () => {
    const { navigation, language, isLoader, images } = UseOurImpactContext();

    return (
        <Content isLoader={isLoader} navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={images[1]} alt="Image5" className="object-cover object-center w-full h-[40vh] animate-fade animate-duration-400" loading="lazy" />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center px-24">
                    <div className="flex flex-col gap-3 text-center">
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>{language[1.1]}</span>
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>{language[1.2]}</span>
                    </div>
                </div>
            </div>
            <div className="py-20 relative overflow-hidden">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[30rem] w-[60%] opacity-10 " />
                <div className="px-32">
                    <span className="text-2xl text-primary-dark font-semibold">{language[2]}</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col gap-6 px-32 mt-12">
                    <div className="w-[70%] text-justify">
                        <span className="text-primary-dark">
                            {language[3]}
                        </span>
                    </div>
                    <div className="w-[70%]">
                        <span className="text-primary-dark">
                            {language[4]}
                        </span>
                    </div>
                </div>
                <hr className="mx-32 border-white-muted my-14" />
                <div className="px-32">
                    <div className="grid grid-cols-4 gap-y-16">
                        <div className="text-center text-primary-dark w-[10rem] cursor-pointer" onClick={() => navigation(RouteName.capitalInvestment)}>
                            <div className="flex justify-center mb-5">
                                <img src={ic1} alt="Capital Investment" width={90} />
                            </div>
                            <span>Capital Investment</span>
                        </div>
                        <div className="text-center text-primary-dark w-[10rem] cursor-pointer" onClick={() => navigation(RouteName.epc)}>
                            <div className="flex justify-center mb-5">
                                <img src={ic2} alt="Capital Investment" width={90} />
                            </div>
                            <span>EPC</span>
                        </div>
                        <div className="text-center text-primary-dark w-[10rem] cursor-pointer" onClick={() => navigation(RouteName.renewableEnergy)}>
                            <div className="flex justify-center mb-5">
                                <img src={ic3} alt="Capital Investment" width={90} />
                            </div>
                            <span>Renewable Energy</span>
                        </div>
                        <div className="text-center text-primary-dark w-[10rem] cursor-pointer" onClick={() => navigation(RouteName.industrial)}>
                            <div className="flex justify-center mb-5">
                                <img src={ic4} alt="Capital Investment" width={90} />
                            </div>
                            <span>Industrial</span>
                        </div>
                        <div className="text-center text-primary-dark w-[10rem] cursor-pointer" onClick={() => navigation(RouteName.integratedTelecomunication)}>
                            <div className="flex justify-center mb-5">
                                <img src={ic5} alt="Capital Investment" width={90} />
                            </div>
                            <span>Integrated Telecomunication</span>
                        </div>
                        <div className="text-center text-primary-dark w-[10rem] cursor-pointer" onClick={() => navigation(RouteName.realEstateProperty)}>
                            <div className="flex justify-center mb-5">
                                <img src={ic6} alt="Capital Investment" width={90} />
                            </div>
                            <span>Real Estate {'&'} Property</span>
                        </div>
                        <div className="text-center text-primary-dark w-[10rem] cursor-pointer" onClick={() => navigation(RouteName.developer)}>
                            <div className="flex justify-center mb-5">
                                <img src={ic7} alt="Capital Investment" width={90} />
                            </div>
                            <span>Developer</span>
                        </div>
                        <div className="text-center text-primary-dark w-[10rem] cursor-pointer" onClick={() => navigation(RouteName.researchDevelopment)}>
                            <div className="flex justify-center mb-5">
                                <img src={ic8} alt="Capital Investment" width={90} />
                            </div>
                            <span>Research and Development</span>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default OurImpactPage;