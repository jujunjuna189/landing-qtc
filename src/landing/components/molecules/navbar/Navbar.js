import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalLanguage, setLocalLanguage } from "../../../../helper/storage/LocalStorage";
import { RouteName } from "../../../../route";
import { lgLogo, ptCircle } from "../../../assets";

const Navbar = ({ navbar }) => {
    const navigation = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const [hoverKey, setHoverKey] = useState('');

    return (
        <>
            <div className={`absolute w-full z-10 ${navbar?.style}`}>
                {((isHover && hoverKey === 'our_impact')) && (
                    <div className="absolute top-0 right-0 w-[80%] h-[80vh] bg-[#052446] bg-opacity-75 z-10 overflow-hidden" onMouseLeave={() => setIsHover(false)} >
                        <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[10rem] -right-[20rem] z-20 w-[55%] opacity-10 " />
                        <div className="pl-[4.5rem] pr-[4.5rem] text-white-light flex justify-between items-center mt-28">
                            <ul>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400" onClick={() => navigation(RouteName.capitalInvestment)}>Capital Investment</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400" onClick={() => navigation(RouteName.epc)}>EPC</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400" onClick={() => navigation(RouteName.renewableEnergy)}>Renewable Energy</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400" onClick={() => navigation(RouteName.industrial)}>Industrial</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400" onClick={() => navigation(RouteName.integratedTelecomunication)}>Integrated Telecomunication</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400" onClick={() => navigation(RouteName.realEstateProperty)}>Real Estate {'&'} Propertity</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400" onClick={() => navigation(RouteName.developer)}>Developer</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400" onClick={() => navigation(RouteName.researchDevelopment)}>Research and Development</li>
                            </ul>
                            <div className="pr-10">
                                <span className="text-6xl font-semibold animate-fade animate-duration-400">Our Impact</span>
                            </div>
                        </div>
                    </div>
                )}
                {((isHover && hoverKey === 'sustainability')) && (
                    <div className="absolute top-0 right-0 w-[80%] h-[80vh] bg-[#052446] bg-opacity-75 z-10 overflow-hidden" onMouseLeave={() => setIsHover(false)} >
                        <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[10rem] -right-[20rem] z-20 w-[55%] opacity-10 " />
                        <div className="pl-[4.5rem] pr-[4.5rem] text-white-light flex justify-between items-center mt-28">
                            <ul>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400" onClick={() => navigation(RouteName.sustainabilityCommitment)}>Commitment</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400" onClick={() => navigation(RouteName.sustainabilityStrategic)}>Our Strategy At QTC</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400" onClick={() => navigation(RouteName.sustainabilityPartnerships)}>Partnerships</li>
                            </ul>
                            <div className="pr-10">
                                <span className="text-6xl font-semibold animate-fade animate-duration-400">Sustainability</span>
                            </div>
                        </div>
                    </div>
                )}
                <div className={`relative flex justify-between items-center px-12 py-5 z-10`}>
                    <div className="cursor-pointer" onClick={() => navigation(RouteName.main)}>
                        <img src={lgLogo} alt="Logo" className="w-32" />
                    </div>
                    <ul className={`relative flex gap-7 grow items-center justify-center pt-4 ${isHover && hoverKey !== 'language' ? "text-white-light" : "text-primary-dark"} ${navbar?.style_nav}`}>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.about)} onMouseEnter={() => setIsHover(false)}>Who We Are</li>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.ourImpact)} onMouseEnter={() => { setIsHover(true); setHoverKey('our_impact') }}>
                            Our Impact
                        </li>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.businessHightlights)} onMouseEnter={() => setIsHover(false)}>Business Highlights</li>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.sustainability)} onMouseEnter={() => { setIsHover(true); setHoverKey('sustainability') }}>Sustainability</li>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.media)} onMouseEnter={() => setIsHover(false)}>Media</li>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.contact)} onMouseEnter={() => setIsHover(false)}>Contact</li>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.career)} onMouseEnter={() => setIsHover(false)}>Career</li>
                    </ul>
                    <div className={`${isHover && hoverKey !== 'language' ? "text-white-light" : "text-primary-dark"} relative ${navbar?.style_nav}`} onMouseEnter={() => { setIsHover(true); setHoverKey('language') }} onMouseLeave={() => setIsHover(false)}>
                        <div className="flex gap-1 items-center pt-4 text-[15px] cursor-pointer ">
                            <span>{getLocalLanguage().display}</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                            </span>
                        </div>
                        {((isHover && hoverKey === 'language')) && (
                            <div className="pt-2">
                                <div className="absolute right-0 w-40 bg-white-light shadow-all rounded-md">
                                    <ul>
                                        <li className="py-2 px-2 border-b border-white-muted cursor-pointer" onClick={() => { setLocalLanguage({ display: 'English', key: 'en' }); setIsHover(false); document.location.reload() }}>
                                            <div className="flex gap-2 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                                                English
                                            </div>
                                        </li>
                                        <li className="py-2 px-2 border-b border-white-muted cursor-pointer" onClick={() => { setLocalLanguage({ display: 'Indonesia', key: 'id' }); setIsHover(false); document.location.reload() }}>
                                            <div className="flex gap-2 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                                                Indonesia
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;