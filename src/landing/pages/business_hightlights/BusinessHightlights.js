import { RouteName } from "../../../route";
import { ptCircle } from "../../assets";
import { Content } from "../../components";
import { UseBusinessContext } from "../../contexts/business/BusinessContext";

const BusinessHightlightsPage = () => {
    const { business, navigation, language, isLoader, images } = UseBusinessContext();

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
            {/* Who we are */}
            <div className="pt-32 pb-32 relative flex flex-row">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -bottom-[15rem] -left-[30rem] w-[60%] opacity-10 " />
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[20rem] w-[60%] opacity-10 " />
                <div className="grow h-full mr-10">
                    <div className="px-20">
                        <span className="text-2xl text-primary-dark font-medium">{language[2]}</span>
                        <div className="w-12 h-1 bg-secondary-dark" />
                    </div>
                    <div className="flex flex-col gap-6 px-20 mt-12">
                        <span className="text-primary-dark w-[80%]">
                            {language[3]}
                        </span>
                        <span className="text-primary-dark w-[80%]">
                            {language[4]}
                        </span>
                        <span className="text-primary-dark w-[80%]">
                            {language[5]}
                        </span>
                        <span className="text-primary-dark w-[80%]">
                            {language[6]}
                        </span>
                    </div>
                    <div className="flex items-center mt-28">
                        <div className="bg-primary-dark h-96 w-24" />
                        <div className="relative flex-1 pr-72 flex justify-center items-center">
                            <img src={images[2]} alt="Image5" className="aspect-[6/5] object-cover object-top animate-fade animate-duration-400" loading="lazy" />
                            <div className="absolute flex flex-col text-center justify-center items-center px-10">
                                <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>{language[7]}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pr-20 w-[25rem] max-w-[25rem] min-w-[25rem]">
                    <div className="flex flex-col gap-10">
                        {(business?.data ?? [])?.map((item, index) => {
                            return (
                                <div key={index} className="flex items-center gap-3 cursor-pointer" onClick={() => navigation(`${RouteName.businessPreview}/${item.id}`)}>
                                    <div className="border rounded-full w-20 min-w-20 max-w-20 h-20 border-primary-dark bg-white-light overflow-hidden">
                                        <img src={item.logo} alt="LogoBusiness" className="w-full h-full rounded-full" />
                                    </div>
                                    <div>
                                        <span className="text-primary-dark font-medium">{item.name}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default BusinessHightlightsPage;