import { ptCircle } from "../../assets";
import { Content } from "../../components";
import { UseMainContext } from "../../contexts/main/MainContext";

const MainPage = () => {
    const { language, isLoader, images } = UseMainContext();

    return (
        <Content isLoader={isLoader}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={images[1]} alt="Image5" className="object-cover object-top w-full h-[80vh] animate-fade animate-duration-400" loading="lazy" />
                <div className="absolute top-0 bottom-0 flex items-center px-24 pt-28">
                    <div className="flex flex-col gap-3">
                        <span className="text-2xl text-white-light" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>{language[1]}</span>
                        <div className="flex flex-col">
                            <span className="text-4xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>{language[2.1]}</span>
                            <span className="text-4xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>{language[2.2]}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Who We Are */}
            <div className="relative py-20 overflow-hidden">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[10rem] -right-[30rem] z-20 w-[70%] opacity-10 " />
                <div className="px-32">
                    <span className="text-2xl text-primary-dark font-medium">{language[3]}</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-36 mt-16">
                    <span className="text-4xl text-primary-dark font-semibold">{language[4.1]}</span>
                    <span className="text-4xl text-primary-dark font-semibold">{language[4.2]}</span>
                </div>
                <div className="bg-primary-dark py-10 mt-24 relative">
                    <div className="w-[19vw] max-w-[19vw] min-w-[19vw] absolute bottom-0 top-0 bg-white-light" />
                    <div className="flex gap-16 px-12 items-center relative">
                        <div>
                            <img src={images[2]} alt="Image5" className="aspect-square object-cover object-top w-[32vw] max-w-[32vw] min-w-[32vw] animate-fade animate-duration-400" loading="lazy" />
                        </div>
                        <div className="flex flex-col gap-1 pr-20">
                            <span className="text-4xl text-white-light font-semibold">{language[5.1]}</span>
                            <span className="text-4xl text-white-light font-semibold">{language[5.2]}</span>
                            <span className="text-4xl text-white-light font-semibold">{language[5.3]}</span>
                            <span className="text-4xl text-white-light font-semibold">{language[5.4]}</span>
                            <div className="mt-12">
                                <span className="text-white-light font-light">
                                    {language[6]}
                                </span>
                            </div>
                            <div className="mt-12">
                                <span className="text-white-light font-light">
                                    {language[7]}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Impact */}
            <div className="bg-gray-dark py-20 relative">
                <div className="px-32">
                    <span className="text-2xl text-primary-dark font-medium">{language[8]}</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-36 mt-12">
                    <div className="w-[60%]">
                        <span className="text-primary-dark font-medium">
                            {language[9]}
                        </span>
                    </div>
                </div>
            </div>
            {/* Bussiness Highlights */}
            <div className="relative">
                <div className="absolute top-0 bottom-0 left-0 right-0">
                    <img src={images[3]} alt="Image5" className="object-cover object-bottom h-full w-full animate-fade animate-duration-400" loading="lazy" />
                </div>
                <div className="py-28 relative">
                    <div className="px-32">
                        <span className="text-2xl text-primary-dark font-medium">{language[10]}</span>
                        <div className="w-12 h-1 bg-secondary-dark" />
                    </div>
                    <div className="flex flex-col px-36 mt-12">
                        <div className="w-[50%]">
                            <span className="text-primary-dark font-medium">
                                {language[11]}
                            </span>
                        </div>
                    </div>
                    <div className="h-[40vh]" />
                    <div className="flex items-center gap-3 px-36">
                        <span className="text-secondary-dark text-5xl font-medium" style={{ textShadow: "0px 1px 10px #4B4B4B" }}>o</span>
                        <div className="mt-1">
                            <span className="text-white-light text-4xl font-medium" style={{ textShadow: "0px 1px 10px #4B4B4B" }}>{language[12]}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sustainability */}
            <div className="py-20 relative flex flex-row overflow-hidden">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -bottom-[10rem] -left-[30rem] w-[70%] opacity-10 " />
                <div className="flex-1 h-full py-24">
                    <div className="px-32">
                        <span className="text-2xl text-primary-dark font-medium">{language[13]}</span>
                        <div className="w-12 h-1 bg-secondary-dark" />
                    </div>
                    <div className="flex flex-col gap-6 px-36 mt-12">
                        <div className="mt-3 text-primary-dark" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: language[14] }} />
                        <span className="text-primary-dark">
                            {language[15]}
                        </span>
                        <span className="text-primary-dark">
                            {language[16]}
                        </span>
                    </div>
                </div>
                <div className="pr-20 flex-1">
                    <div className="bg-primary-dark w-full h-full py-24">
                        <div className="px-12">
                            <span className="text-2xl text-white-light font-medium">{language[17]}</span>
                            <div className="w-12 h-1 bg-secondary-dark" />
                        </div>
                        <div className="flex flex-col gap-6 px-12 mt-12">
                            <span className="text-white-light text-[18px]">
                                {language[18]}
                            </span>
                        </div>
                        <div className="mt-10 px-12 flex">
                            <div className="bg-white-light px-8 py-2">
                                <span className="text-primary-dark font-semibold">{language[19]}</span>
                            </div>
                        </div>
                        <div className="h-[20vh]" />
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default MainPage;