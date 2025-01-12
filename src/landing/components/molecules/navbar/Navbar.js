import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
                    <div className="absolute top-0 right-0 w-[80%] h-[80vh] bg-[#052446] bg-opacity-75 z-10 overflow-auto" onMouseLeave={() => setIsHover(false)} >
                        <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[10rem] -right-[20rem] z-20 w-[55%] opacity-10 "/>
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
                    <div className="absolute top-0 right-0 w-[80%] h-[80vh] bg-[#052446] bg-opacity-75 z-10 overflow-auto" onMouseLeave={() => setIsHover(false)} >
                        <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[10rem] -right-[20rem] z-20 w-[55%] opacity-10 "/>
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
                    <ul className={`relative flex gap-7 grow items-center justify-center pt-4 ${isHover ? "text-white-light" : "text-primary-dark"} ${navbar?.style_nav}`}>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.about)} onMouseEnter={() => setIsHover(false)}>Who We Are</li>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.ourImpact)} onMouseEnter={() => {setIsHover(true); setHoverKey('our_impact')}}>
                            Our Impact
                        </li>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.businessHightlights)} onMouseEnter={() => setIsHover(false)}>Business Highlights</li>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.sustainability)} onMouseEnter={() => {setIsHover(true); setHoverKey('sustainability')}}>Sustainability</li>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.media)} onMouseEnter={() => setIsHover(false)}>Media</li>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.contact)} onMouseEnter={() => setIsHover(false)}>Contact</li>
                        <li className="text-[15px] cursor-pointer" onClick={() => navigation(RouteName.career)} onMouseEnter={() => setIsHover(false)}>Career</li>
                    </ul>
                    <div className={`${isHover ? "text-white-light" : "text-primary-dark"} ${navbar?.style_nav}`}>
                        <div className="flex gap-1 items-center pt-4 text-[15px] cursor-pointer">
                            <span>English</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;