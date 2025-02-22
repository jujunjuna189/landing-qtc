
import { RouteName } from "../../../route";
import { ptCircle } from "../../assets";
import { Content } from "../../components";
import { UseCareerExploreContext } from "../../contexts/career/CareerExploreContext";
import { JobDetailModal } from "./components";

const CareerExplorePage = () => {
    const { language, career, navigation } = UseCareerExploreContext();

    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[20rem] -right-[20rem] w-[60%] opacity-10 " />
                <div className="w-full pt-28 pb-16 flex justify-start items-center px-20 bg-primary-dark">
                    <div className="grow flex flex-col gap-1 text-start mt-10">
                        <div className="">
                            <span className="text-white-light font-semibold">{language[1]}</span>
                        </div>
                        <span className="text-7xl text-white-light font-semibold">{language[2.1]}</span>
                        <span className="text-7xl text-white-light font-semibold">{language[2.2]}</span>
                        <div className="w-36 h-3 bg-secondary-dark mt-5" />
                    </div>
                </div>
            </div>
            <div className="my-32" />
            <div className="relative flex gap-20 px-20 h-[20vh] justify-center items-center">
                <div className="border border-primary-dark flex">
                    <div className="grow flex flex-col justify-center pl-10 pr-60">
                        <span className="font-medium text-primary-dark">{language[3]}</span>
                        <div className="mt-5">
                            <span className="text-primary-dark">{language[4]}</span>
                        </div>
                    </div>
                    <div className="border-l border-primary-dark my-5" />
                    <div className="flex flex-col justify-center pl-10 pr-20">
                        <span className="font-medium text-primary-dark">{language[5]}</span>
                        <div className="mt-5">
                            <span className="text-primary-dark">{language[6]}</span>
                        </div>
                    </div>
                    <div className="bg-gray-dark flex items-center px-9 py-9">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-white-light" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mt-10 mb-5 w-[60rem]">
                    {career.data?.map((item, index) => {
                        return (
                            <div key={index}>
                                <JobDetailModal item={item}>
                                    <div className="hover:bg-gray-dark transition-all duration-300 ease-in-out p-4 cursor-pointer">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="text-[20px] font-medium">{item.title}</span>
                                                <div className="flex items-center gap-2 text-[13px]">
                                                    <span>{item.location}</span>
                                                    <div className="rounded-full bg-primary-light w-2 h-2" />
                                                    <span className="font-medium">POSTING DATES <span className="font-normal">{item.posting_date}</span></span>
                                                    {item.status && (
                                                        <>
                                                            <div className="rounded-full bg-primary-light w-2 h-2" />
                                                            <span>{item.status}</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex gap-3 items-center">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </JobDetailModal>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className=""></div>
            <div className="flex justify-center mt-7">
                <div className="cursor-pointer" onClick={() => navigation(RouteName.careerList)}>
                    <span className="font-bold text-primary-dark">{language[7]} ({career.total})</span>
                </div>
            </div>
            <div className="my-32" />
        </Content>
    );
}

export default CareerExplorePage;