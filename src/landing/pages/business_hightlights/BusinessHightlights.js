import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../route";
import { img7, img8, ptCircle } from "../../assets";
import { Content } from "../../components";
import { UseBusinessContext } from "../../contexts/business/BusinessContext";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const BusinessHightlightsPage = () => {
    const { business } = UseBusinessContext();
    const navigation = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img8,
        img7,
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
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>Connect evolving needs with</span>
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>sustainable innovation opportunities</span>
                    </div>
                </div>
            </div>
            {/* Who we are */}
            <div className="pt-32 pb-32 relative flex flex-row">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -bottom-[15rem] -left-[30rem] w-[90%] opacity-10 " />
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[20rem] w-[70%] opacity-10 " />
                <div className="grow h-full">
                    <div className="px-20">
                        <span className="text-2xl text-primary-dark font-medium">Business Highlights</span>
                        <div className="w-12 h-1 bg-secondary-dark" />
                    </div>
                    <div className="flex flex-col gap-6 px-20 mt-12">
                        <span className="text-primary-dark">
                            Quantum Trans Capital continues to support the latest renewable energy-based developments
                        </span>
                        <span className="text-primary-dark">
                            Across the various sectors we operate and enable, we strive to deliver excellence and long-term
                            sustainable value as we strengthen Quantum Trans Capital's position as a leading regional and
                            international economic, commercial and renewable energy hub.
                        </span>
                        <span className="text-primary-dark">
                            We embrace innovative projects and work closely with strategic partners to enrich the lives of people,
                            communities as a whole for a better tomorrow.
                        </span>
                        <span className="text-primary-dark">
                            Over the years, we have delivered leading projects and destinations as well as untapped opportunities
                            through key partnerships and investments in the region and beyond. Here we believe that what we are
                            doing is an innovation of sustainability and an excellent contribution to the sustainability of the
                            Republic of Indonesia.
                        </span>
                    </div>
                    <div className="flex items-center mt-10">
                        <div className="bg-primary-dark h-96 w-24" />
                        <div className="relative flex-1 pr-72 flex justify-center items-center">
                            <img src={images[1]} alt="Image5" className="aspect-[6/5] object-cover object-top animate-fade animate-duration-400" loading="lazy" />
                            <div className="absolute flex flex-col text-center justify-center items-center px-10">
                                <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>Delivering sustainable value across various sectors</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pr-20 w-[30rem] max-w-[30rem] min-w-[30rem]">
                    <div className="flex flex-col gap-10">
                        {(business?.data ?? [])?.map((item, index) => {
                            return (
                                <div key={index} className="flex items-center gap-3 cursor-pointer" onClick={() => navigation(RouteName.businessPreview)}>
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