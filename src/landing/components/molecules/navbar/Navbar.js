import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LandingLanguage } from "../../../../helper/language/LandingLanguage";
import { getLocalLanguage, setLocalLanguage } from "../../../../helper/storage/LocalStorage";
import { RouteName } from "../../../../route";
import { imgCarrer, imgMedia, imgOurImpact, imgSustainability, lgLogoGif, ptCircle } from "../../../assets";

const Navbar = ({ navbar }) => {
    const navigation = useNavigate();
    const location = useLocation();
    const language = LandingLanguage[getLocalLanguage().key].navbar;
    const [isHover, setIsHover] = useState(false);
    const [hoverKey, setHoverKey] = useState('');
    const [ourImpact, setOurImpact] = useState(language[2]);
    const [sustainability, setSustainability] = useState(language[4]);
    const [media, setMedia] = useState(language[5]);
    const [career, setCareer] = useState(language[7]);
    const [navbarVisible, setNavbarVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavbarVisible(window.scrollY > 50); // Muncul saat scroll lebih dari 50px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className={`fixed w-full z-20 ${navbar?.style}`}>
                {((isHover && hoverKey === 'our_impact')) && (
                    <div className="fixed top-0 right-0 w-[80%] h-[100vh] bg-[#052446] bg-opacity-75 z-10 overflow-hidden pt-5" onMouseLeave={() => setIsHover(false)} >
                        <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[10rem] -right-[20rem] z-20 w-[55%] opacity-10 " />
                        <div className="pl-[4.5rem] pr-[4.5rem] text-white-light flex justify-between mt-28">
                            <ul>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setOurImpact(language[2.1])} onMouseLeave={() => setOurImpact(language[2])} onClick={() => navigation(RouteName.capitalInvestment)}>{language[2.1]}</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setOurImpact(language[2.2])} onMouseLeave={() => setOurImpact(language[2])} onClick={() => navigation(RouteName.epc)}>{language[2.2]}</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setOurImpact(language[2.3])} onMouseLeave={() => setOurImpact(language[2])} onClick={() => navigation(RouteName.renewableEnergy)}>{language[2.3]}</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setOurImpact(language[2.4])} onMouseLeave={() => setOurImpact(language[2])} onClick={() => navigation(RouteName.industrial)}>{language[2.4]}</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setOurImpact(language[2.5])} onMouseLeave={() => setOurImpact(language[2])} onClick={() => navigation(RouteName.integratedTelecomunication)}>{language[2.5]}</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setOurImpact(language[2.6])} onMouseLeave={() => setOurImpact(language[2])} onClick={() => navigation(RouteName.realEstateProperty)}>{language[2.6]}</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setOurImpact(language[2.7])} onMouseLeave={() => setOurImpact(language[2])} onClick={() => navigation(RouteName.developer)}>{language[2.7]}</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setOurImpact(language[2.8])} onMouseLeave={() => setOurImpact(language[2])} onClick={() => navigation(RouteName.researchDevelopment)}>{language[2.8]}</li>
                            </ul>
                            <div className="grow px-20 flex justify-center pl-20">
                                <div className="">
                                    <span className="text-6xl font-semibold animate-fade animate-duration-400">{ourImpact}</span>
                                    <div className="mt-10">
                                        <img src={imgOurImpact} alt="OurImpactImage" className="w-[90%] animate-fade animate-duration-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {((isHover && hoverKey === 'sustainability')) && (
                    <div className="fixed top-0 right-0 w-[80%] h-[100vh] bg-[#052446] bg-opacity-75 z-10 overflow-hidden pt-5" onMouseLeave={() => setIsHover(false)} >
                        <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[10rem] -right-[20rem] z-20 w-[55%] opacity-10 " />
                        <div className="pl-[4.5rem] pr-[4.5rem] text-white-light flex justify-between mt-28">
                            <ul>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setSustainability(language[4.1])} onMouseLeave={() => setSustainability(language[4])} onClick={() => navigation(RouteName.sustainabilityCommitment)}>{language[4.1]}</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setSustainability(language[4.2])} onMouseLeave={() => setSustainability(language[4])} onClick={() => navigation(RouteName.sustainabilityStrategic)}>{language[4.2]}</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setSustainability(language[4.3])} onMouseLeave={() => setSustainability(language[4])} onClick={() => navigation(RouteName.sustainabilityPartnerships)}>{language[4.3]}</li>
                            </ul>
                            <div className="grow px-20 flex justify-center pl-20">
                                <div className="">
                                    <span className="text-6xl font-semibold animate-fade animate-duration-400">{sustainability}</span>
                                    <div className="mt-10">
                                        <img src={imgSustainability} alt="SustainabilityImage" className="w-[90%] animate-fade animate-duration-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {((isHover && hoverKey === 'media')) && (
                    <div className="fixed top-0 right-0 w-[80%] h-[100vh] bg-[#052446] bg-opacity-75 z-10 overflow-hidden pt-5" onMouseLeave={() => setIsHover(false)} >
                        <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[10rem] -right-[20rem] z-20 w-[55%] opacity-10 " />
                        <div className="pl-[4.5rem] pr-[4.5rem] text-white-light flex justify-between mt-28">
                            <ul>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setMedia(language[5.1])} onMouseLeave={() => setMedia(language[5])} onClick={() => navigation(RouteName.media)}>{language[5.1]}</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setMedia(language[5.2])} onMouseLeave={() => setMedia(language[5])} onClick={() => navigation(RouteName.mediaMarketing)}>{language[5.2]}</li>
                            </ul>
                            <div className="grow px-20 flex justify-center pl-20">
                                <div className="">
                                    <span className="text-6xl font-semibold animate-fade animate-duration-400">{media}</span>
                                    <div className="mt-10">
                                        <img src={imgMedia} alt="MediaImage" className="w-[90%] animate-fade animate-duration-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {((isHover && hoverKey === 'career')) && (
                    <div className="fixed top-0 right-0 w-[80%] h-[100vh] bg-[#052446] bg-opacity-75 z-10 overflow-hidden pt-5" onMouseLeave={() => setIsHover(false)} >
                        <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[10rem] -right-[20rem] z-20 w-[55%] opacity-10 " />
                        <div className="pl-[4.5rem] pr-[4.5rem] text-white-light flex justify-between mt-28">
                            <ul>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setCareer(language[7.1])} onMouseLeave={() => setCareer(language[7])} onClick={() => navigation(RouteName.career)}>{language[7.1]}</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setCareer(language[7.2])} onMouseLeave={() => setCareer(language[7])} onClick={() => navigation(RouteName.careerList)}>{language[7.2]}</li>
                                <li className="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-xl whitespace-pre" onMouseEnter={() => setCareer(language[7.3])} onMouseLeave={() => setCareer(language[7])} onClick={() => navigation(RouteName.careerExplore)}>{language[7.3]}</li>
                            </ul>
                            <div className="grow px-20 flex justify-center pl-20">
                                <div className="">
                                    <span className="text-6xl font-semibold animate-fade animate-duration-400">{career}</span>
                                    <div className="mt-10">
                                        <img src={imgCarrer} alt="CarrerImage" className="w-[90%] animate-fade animate-duration-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className={`h-[5.5rem] absolute transition-all duration-300 top-0 left-0 right-0 ${navbarVisible ? "bg-white-light shadow-lg" : "bg-transparent"}`} />
                <div className={`relative flex justify-between items-center px-12 py-5 z-10`}>
                    <div className="cursor-pointer relative" onClick={() => navigation(RouteName.main)}>
                        <img src={lgLogoGif} alt="Logo" className="w-32 h-12 object-cover" />
                    </div>
                    <ul className={`relative flex gap-7 grow items-center justify-center ${isHover && hoverKey !== 'language' ? "text-white-light" : "text-primary-dark"} ${navbar?.style_nav}`}>
                        <li className={`text-[15px] cursor-pointer hover:font-semibold ${location.pathname.split('/')?.[1] === 'about' && 'font-semibold'}`} onClick={() => navigation(RouteName.about)} onMouseEnter={() => setIsHover(false)}>{language[1]}</li>
                        <li className={`text-[15px] cursor-pointer hover:font-semibold ${location.pathname.split('/')?.[1] === 'our-impact' && 'font-semibold'}`} onClick={() => navigation(RouteName.ourImpact)} onMouseEnter={() => { setIsHover(true); setHoverKey('our_impact') }}>
                            {language[2]}
                        </li>
                        <li className={`text-[15px] cursor-pointer hover:font-semibold ${location.pathname.split('/')?.[1] === 'business-hightlights' && 'font-semibold'}`} onClick={() => navigation(RouteName.businessHightlights)} onMouseEnter={() => setIsHover(false)}>{language[3]}</li>
                        <li className={`text-[15px] cursor-pointer hover:font-semibold ${location.pathname.split('/')?.[1] === 'sustainability' && 'font-semibold'}`} onClick={() => navigation(RouteName.sustainability)} onMouseEnter={() => { setIsHover(true); setHoverKey('sustainability') }}>{language[4]}</li>
                        <li className={`text-[15px] cursor-pointer hover:font-semibold ${location.pathname.split('/')?.[1] === 'media' && 'font-semibold'}`} onMouseEnter={() => { setIsHover(true); setHoverKey('media') }}>{language[5]}</li>
                        <li className={`text-[15px] cursor-pointer hover:font-semibold ${location.pathname.split('/')?.[1] === 'contact' && 'font-semibold'}`} onClick={() => navigation(RouteName.contact)} onMouseEnter={() => setIsHover(false)}>{language[6]}</li>
                        <li className={`text-[15px] cursor-pointer hover:font-semibold ${location.pathname.split('/')?.[1] === 'career' && 'font-semibold'}`} onMouseEnter={() => { setIsHover(true); setHoverKey('career') }}>{language[7]}</li>
                    </ul>
                    <div className={`${isHover && hoverKey !== 'language' ? "text-white-light" : "text-primary-dark"} relative ${navbar?.style_nav}`} onMouseEnter={() => { setIsHover(true); setHoverKey('language') }} onMouseLeave={() => setIsHover(false)}>
                        <div className="flex gap-1 items-center text-[15px] cursor-pointer ">
                            <span>{getLocalLanguage().display}</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                            </span>
                        </div>
                        {((isHover && hoverKey === 'language')) && (
                            <div className="absolute right-0 text-primary-dark">
                                <div className="w-40 bg-white-light shadow-all rounded-md mt-2">
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