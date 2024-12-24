import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../route";
import { img9 } from "../../assets";
import { Content } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const MediaPage = () => {
    const navigation = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img9,
    ];

    useEffect(() => {
        images.forEach(preloadImage);
    }, [images]);

    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={images[0]} alt="Image5" className="object-cover object-center w-full h-[40vh]" loading="lazy" />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-start items-center px-24">
                    <div className="flex flex-col gap-3 text-start">
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #000" }}>Quantum Trans Capital:</span>
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #000" }}>News and Updates</span>
                    </div>
                </div>
            </div>
            <div className="py-20 relative">
                <div className="px-32">
                    <span className="text-2xl text-primary-dark font-semibold">Press Release</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="px-32 mt-16">
                    <div className="flex justify-between items-center bg-gray-dark">
                        <div className="px-9">
                            <span className="text-dark-muted font-medium">
                                Find news by title
                            </span>
                        </div>
                        <div className="flex gap-10 items-center">
                            <div className="flex gap-7 h-full">
                                <div className="h-full flex items-center gap-7">
                                    <span className="font-medium text-sm">Category</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-dark-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                                    </span>
                                </div>
                                <div className="h-full flex items-center gap-7">
                                    <span className="font-medium text-sm">Year</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-dark-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                                    </span>
                                </div>
                                <div className="h-full flex items-center gap-7">
                                    <span className="font-medium text-sm">Month</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-dark-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                                    </span>
                                </div>
                            </div>
                            <div className="bg-primary-dark px-10 py-3">
                                <span className="uppercase text-white-light">
                                    Search News
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-12">
                        <div className="shadow-all cursor-pointer" onClick={() => navigation(RouteName.mediaPreview)}>
                            <div className="aspect-[16/13] bg-primary-dark"></div>
                            <div className="p-3">
                                <span className="text-primary-dark font-medium">GKB Innovation: Winning Title for Best Company Project in 2025</span>
                            </div>
                            <div className="mt-2 p-3">
                                <span className="text-dark-muted text-sm">Oktober 24, 2025</span>
                            </div>
                        </div>
                        <div className="shadow-all cursor-pointer" onClick={() => navigation(RouteName.mediaPreview)}>
                            <div className="aspect-[16/13] bg-primary-dark"></div>
                            <div className="p-3">
                                <span className="text-primary-dark font-medium">GKB Innovation: Winning Title for Best Company Project in 2025</span>
                            </div>
                            <div className="mt-2 p-3">
                                <span className="text-dark-muted text-sm">Oktober 24, 2025</span>
                            </div>
                        </div>
                        <div className="shadow-all cursor-pointer" onClick={() => navigation(RouteName.mediaPreview)}>
                            <div className="aspect-[16/13] bg-primary-dark"></div>
                            <div className="p-3">
                                <span className="text-primary-dark font-medium">GKB Innovation: Winning Title for Best Company Project in 2025</span>
                            </div>
                            <div className="mt-2 p-3">
                                <span className="text-dark-muted text-sm">Oktober 24, 2025</span>
                            </div>
                        </div>
                        <div className="shadow-all cursor-pointer" onClick={() => navigation(RouteName.mediaPreview)}>
                            <div className="aspect-[16/13] bg-primary-dark"></div>
                            <div className="p-3">
                                <span className="text-primary-dark font-medium">GKB Innovation: Winning Title for Best Company Project in 2025</span>
                            </div>
                            <div className="mt-2 p-3">
                                <span className="text-dark-muted text-sm">Oktober 24, 2025</span>
                            </div>
                        </div>
                    </div>
                    {/* pagination */}
                    <div className="flex justify-end mt-12">
                        <div className="flex bg-gray-dark">
                            <div className="py-1 px-3 bg-primary-dark text-white-light">1</div>
                            <div className="py-1 px-3 text-primary-dark">2</div>
                            <div className="py-1 px-3 text-primary-dark">3</div>
                            <div className="py-1 px-3 text-primary-dark">4</div>
                            <div className="py-1 px-3 text-primary-dark">5</div>
                            <div className="py-1 px-3 text-primary-dark">Next {'>'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default MediaPage;