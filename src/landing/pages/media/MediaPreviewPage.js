
import { RouteName } from "../../../route";
import { ptCircle } from "../../assets";
import { Content } from "../../components";
import { UseMediaPreviewContext } from "../../contexts/media/MediaPreviewContext";

const MediaPreviewPage = () => {
    const { navigation, images, news, isLoader } = UseMediaPreviewContext();

    return (
        <Content isLoader={isLoader} navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[10rem] -right-[20rem] w-[60%] opacity-10 " />
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
                            <img src={images[0]} alt="Image5" className="aspect-[6/5] object-cover object-top animate-fade animate-duration-400" loading="lazy" />
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
                <div className="mt-10">
                    <div className="mt-3 font-medium custom-content" style={{ display: 'flex', whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: news.content }} />
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