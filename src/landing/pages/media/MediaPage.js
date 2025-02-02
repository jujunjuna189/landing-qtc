import { RouteName } from "../../../route";
import { ptCircle } from "../../assets";
import { Content } from "../../components";
import { UseMediaContext } from "../../contexts/media/MediaContext";
import { DateFormatter } from "../../helpers";

const MediaPage = () => {
    const { navigation, language, images, isLoader, news, getPagination } = UseMediaContext();

    return (
        <Content isLoader={isLoader} navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={images[1]} alt="Image5" className="object-cover object-center w-full h-[40vh] animate-fade animate-duration-400" loading="lazy" />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-start items-center px-24">
                    <div className="flex flex-col gap-3 text-start">
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #000" }}>{language[1.1]}</span>
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #000" }}>{language[1.2]}</span>
                    </div>
                </div>
            </div>
            <div className="py-20 relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[20rem] w-[70%] opacity-10 " />
                <div className="px-32">
                    <span className="text-2xl text-primary-dark font-semibold">{language[2]}</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="px-32 mt-16">
                    <div className="flex justify-between items-center bg-gray-dark">
                        <div className="px-9">
                            <span className="text-dark-muted font-medium">
                                {language[3]}
                            </span>
                        </div>
                        <div className="flex gap-10 items-center">
                            <div className="flex gap-7 h-full">
                                <div className="h-full flex items-center gap-7 cursor-pointer">
                                    <span className="font-medium text-sm">{language[4]}</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-dark-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                                    </span>
                                </div>
                                <div className="h-full flex items-center gap-7 cursor-pointer">
                                    <span className="font-medium text-sm">{language[5]}</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-dark-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                                    </span>
                                </div>
                                <div className="h-full flex items-center gap-7 cursor-pointer">
                                    <span className="font-medium text-sm">{language[6]}</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-dark-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                                    </span>
                                </div>
                            </div>
                            <div className="bg-primary-dark px-10 py-3 cursor-pointer">
                                <span className="uppercase text-white-light">
                                    {language[7]}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-12">
                        {(news?.data ?? [])?.map((item, index) => {
                            return (
                                <div key={index} className="shadow-all cursor-pointer bg-white-light" onClick={() => navigation(RouteName.mediaPreview)}>
                                    <div className="aspect-[16/13] bg-primary-dark">
                                        <img src={item.image} alt="NewsImage" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-3">
                                        <span className="text-primary-dark font-medium">{item.title}</span>
                                    </div>
                                    <div className="mt-2 p-3">
                                        <span className="text-dark-muted text-sm">{DateFormatter.v1({ value: item.date })}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* pagination */}
                    <div className="flex justify-end mt-12">
                        <div className="flex bg-gray-dark">
                            {getPagination({ total: news?.last_page }).map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item}
                                    </div>
                                );
                            })}
                            <div className="py-1 px-3 text-primary-dark cursor-pointer" onClick={() => { }}>{language[8]} {'>'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default MediaPage;