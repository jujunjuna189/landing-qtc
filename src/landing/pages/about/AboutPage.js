import { ptCircle } from "../../assets";
import { Content } from "../../components";
import { UseAboutContext } from "../../contexts/about/AboutContext";

const AboutPage = () => {
    const { language, isLoader, images } = UseAboutContext();

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
            <div className="pt-56 pb-32 relative flex flex-row overflow-hidden">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[10rem] -right-[30rem] w-[70%] opacity-10 " />
                <div className="flex-1 h-full">
                    <div className="px-20">
                        <span className="text-2xl text-primary-dark font-medium">{language[2]}</span>
                        <div className="w-12 h-1 bg-secondary-dark" />
                    </div>
                    <div className="flex flex-col px-20 mt-16">
                        <span className="text-4xl text-primary-dark font-semibold">{language[3.1]}</span>
                        <span className="text-4xl text-primary-dark font-semibold">{language[3.2]}</span>
                    </div>
                    <div className="flex flex-col gap-6 px-20 mt-12">
                        <span className="text-primary-dark">
                            {language[4]}
                        </span>
                        <span className="text-primary-dark">
                            {language[5]}
                        </span>
                        <span className="text-primary-dark">
                            {language[6]}
                        </span>
                        <span className="text-primary-dark">
                            {language[7]}
                        </span>
                    </div>
                </div>
                <div className="pr-20 flex-1">
                    <div className="bg-primary-dark w-full h-full">
                        <img src={images[2]} alt="Image5" className="object-cover object-center w-full h-full animate-fade animate-duration-400" loading="lazy" />
                    </div>
                </div>
            </div>
            {/* Visi Misi */}
            <div className="mb-20 relative flex gap-5 flex-row">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -bottom-[15rem] -left-[30rem] w-[100%] opacity-10 " />
                <div className="flex-1 pl-20">
                    <div className="bg-gray-dark h-full py-24">
                        <div className="px-12">
                            <span className="text-2xl text-primary-dark font-medium">{language[8]}</span>
                            <div className="w-12 h-1 bg-secondary-dark" />
                        </div>
                        <div className="flex flex-col gap-6 px-12 mt-12">
                            <span className="text-primary-dark">
                                {language[9]}
                            </span>
                            <span className="text-primary-dark">
                                {language[10]}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="pr-20 flex-1 relative">
                    <div className="bg-gray-dark w-full h-full py-24">
                        <div className="px-12">
                            <span className="text-2xl text-primary-dark font-medium">{language[11]}</span>
                            <div className="w-12 h-1 bg-secondary-dark" />
                        </div>
                        <div className="flex flex-col gap-6 px-12 mt-12">
                            <span className="text-primary-dark">
                                {language[12]}
                            </span>
                            <span className="text-primary-dark">
                                {language[13]}
                            </span>
                            <span className="text-primary-dark">
                                {language[14]}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="bg-primary-dark py-10 mt-24 px-20 relative">
                <span className="text-4xl text-white-light font-semibold">{language[15]}</span>
                <div className="w-12 h-1 bg-secondary-dark mt-2" />
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-1 mt-20 flex-1">
                        <span className="text-4xl text-white-light font-semibold">{language[16]}</span>
                        <span className="text-4xl text-white-light font-semibold">{language[17]}</span>
                    </div>
                    <div className="mt-20 flex-1">
                        <span className="text-white-light font-light">
                            {language[18]}
                        </span>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default AboutPage;