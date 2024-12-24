
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../route";
import { img7 } from "../../assets";
import { Content } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const MediaPreviewPage = () => {
    const navigation = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img7,
    ];

    useEffect(() => {
        images.forEach(preloadImage);
    }, [images]);

    return (
        <Content navbar={{ style_nav: "text-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <div className="w-full pt-28 pb-16 flex justify-start items-center px-20 bg-primary-dark">
                    <div className="grow flex justify-between">
                        <div className="grow flex flex-col gap-1 text-start mt-20">
                            <div className="mb-4">
                                <span className="text-white-light font-semibold">Press Release</span>
                            </div>
                            <span className="text-5xl text-white-light font-semibold">Lighting Revolution:</span>
                            <span className="text-5xl text-white-light font-semibold">DMT Launches Cutting-Edge</span>
                            <span className="text-5xl text-white-light font-semibold"> LED Innovations</span>
                            <div className="mt-3">
                                <span className="text-white-light text-sm">November 14, 2024</span>
                            </div>
                        </div>
                        <div className="w-[30rem]">
                            <img src={images[0]} alt="Image5" className="aspect-[6/5] object-cover object-top" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grow py-20 px-32">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-sm cursor-pointer" onClick={() => navigation(RouteName.mediaMarketing)}>
                        <span className="text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                        </span>
                        <span className="text-primary-dark font-medium">Download</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <span>Share via: </span>
                        <div className="bg-primary-dark w-6 h-6 rounded-full"></div>
                        <div className="bg-primary-dark w-6 h-6 rounded-full"></div>
                        <div className="bg-primary-dark w-6 h-6 rounded-full"></div>
                        <div className="bg-primary-dark w-6 h-6 rounded-full"></div>
                    </div>
                </div>
                <div className="mt-10 font-medium">
                    <span className="">
                        A lamp is an electrical appliance that is definitely used by every household with access to electricity. Based on survey results in 2020, each household uses 5 to 6 lamps on
                        average for 7.6 hours per day. Lighting technology has evolved rapidly in the last 20 years from incandescent bulbs to self-balancing lamps or compact fluorescent lamps
                        (CFLs) that have been widely used since 2002, and now light emitting diode (LED) lighting technology that has entered the commercial stage since 2013. The main
                        difference between these lighting technologies is the energy efficiency or efficacy (expressed in lumens per watt or lm/W), which is 8 - 15 lm/W for incandescent lamps,
                        50 - 70 lm/W for CFLs, and 80 - 110 lm/W for LED lamps. This means that the use of LED lights has the potential to save a minimum of 14% energy when compared to the
                        use of CFLs.
                    </span>
                </div>
                <div className="mt-10 font-medium">
                    <span className="">
                        Therefore, the number of LED lamp sales continues to increase from 22 million lamps in 2012 to 60 million units in 2019. The use of LED lamps needs to be increased
                        further because the number of LED lamps is still 52% of the total number of lamps used by households. Other lamps used are CFLs (41%) and incandescent lamps (7%).
                        Demand for lighting is projected to increase to 165 million units by 2030.
                    </span>
                </div>
                <div className="mt-10 font-medium">
                    <span className="">
                        In this regard, the Research and Development Agency of ESDM and the Directorate General of EBTKE - Ministry of ESDM are preparing a Roadmap for LED Lighting
                        Development to accelerate the clean energy transition towards zero emission targets in the energy sector. Head of P3Tek KEBTKE, Hariyanto, explained that the
                        Roadmap will contain plans from various ministries/institutions, associations, and the LED lighting industry. Indonesia has 41 LED lighting industries and 3 lighting
                        industry associations, namely the Indonesian Luminaire Association (Alindo), the Association of Indonesian Lighting Companies (Apperlindo), and the Indonesian
                        Integrated Lighting Manufacturing Industry Association (Gamatrindo).
                    </span>
                </div>
                <div className="mt-10 font-medium">
                    <span className="">
                        The initial stage of preparing the Roadmap is a survey of the capabilities and work plans of the domestic LED lighting industry which will be carried out from the second
                        week of June to the second week of July 2021. The results of the first survey on June 7 to 11, 2021 are that the domestic LED lighting industry is capable of producing
                        quality products and competing with well-known imported lighting products.
                    </span>
                </div>
                <div className="mt-10 font-medium">
                    <span className="">
                        The first survey was conducted at PT Daya Mandiri Terbarukan (DMT) in Curug, Banten. DMT is not currently a member of the lighting industry association. DMT's main
                        products are LED lights for public street lighting (PJU), but DMT also produces solar PJU, LED light bulbs, LED tube lights, LED showcase lights, LED high bay lights, and
                        LED floodlights. Besides having its own brand FujiLED, DMT is an Original Equipment Manufacturer (OEM) of several other leading lighting brands. Ono, Section Head of
                        DMT, explained that DMT is committed to producing high-quality LED lights such as power factors above 95% and efficacy above 100 lm/W. DMT's future plan is to
                        continue to cooperate with other companies both domestically and abroad in producing LED lights. More information about DMT can be found at
                        https://www.linkedin.com/company/pt-daya-mandiri-terbarukan/about/
                    </span>
                </div>
                <div className="mt-10 flex gap-2 items-center text-primary-dark font-semibold cursor-pointer" onClick={() => navigation(-1)}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
                    </span>
                    <span>Go back to Press Releases</span>
                </div>
            </div>
            <div className="my-40" />
        </Content>
    );
}

export default MediaPreviewPage;