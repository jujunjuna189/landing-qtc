import { lgLogo } from "../../../assets";

const Footer = () => {
    return (
        <div className="bg-dark-dark py-10 px-20">
            <div className="flex justify-between ">
                <ul className="flex gap-7 grow items-center">
                    <li className="text-white-light text-[15px] cursor-pointer">Who We Are</li>
                    <li className="text-white-light text-[15px] cursor-pointer">Our Impact</li>
                    <li className="text-white-light text-[15px] cursor-pointer">Business Highlights</li>
                    <li className="text-white-light text-[15px] cursor-pointer">Sustainability</li>
                    <li className="text-white-light text-[15px] cursor-pointer">Media</li>
                    <li className="text-white-light text-[15px] cursor-pointer">Contact</li>
                    <li className="text-white-light text-[15px] cursor-pointer">Career</li>
                </ul>
                <ul className="flex gap-7 justify-end items-center">
                    <li className="text-white-light text-[15px] cursor-pointer font-medium">News Update</li>
                    <li className="text-white-light text-[15px] cursor-pointer font-medium">Press Release and Resources</li>
                </ul>
            </div>
            <hr className="my-3 border-dark-muted" />
            <div className="flex justify-between">
                <ul className="flex gap-4 grow items-center">
                    <li className="text-white-light text-[15px] cursor-pointer">
                        <img src={lgLogo} alt="Logo" className="w-32" />
                    </li>
                    <li className="text-white-light text-[10px] pt-4 cursor-pointer">COPYRIGHT © 2024 QUANTUM TRANS CAPITAL, ALL RIGHT RESERVED</li>
                    <li className="text-white-light text-[10px] pt-4 cursor-pointer">
                        <div className="flex gap-2">
                            <span>|</span>
                            <span>CONTACT US</span>
                        </div>
                    </li>
                    <li className="text-white-light text-[10px] pt-4 cursor-pointer">
                        <div className="flex gap-2">
                            <span>|</span>
                            <span>PRIVACY POLICY</span>
                        </div>
                    </li>
                    <li className="text-white-light text-[10px] pt-4 cursor-pointer">
                        <div className="flex gap-2">
                            <span>|</span>
                            <span>TERMS {"&"} CONDITIONS</span>
                        </div>
                    </li>
                    <li className="text-white-light text-[10px] pt-4 cursor-pointer">
                        <div className="flex gap-2">
                            <span>|</span>
                            <span>COOKIE POLICY</span>
                        </div>
                    </li>
                    <li className="text-white-light text-[10px] pt-4 cursor-pointer">
                        <div className="flex gap-2">
                            <span>|</span>
                            <span>SITEMAP</span>
                        </div>
                    </li>
                </ul>
                <ul className="flex gap-7 justify-end items-center">
                    <li className="text-white-light text-[10px] pt-4 cursor-pointer font-medium">CONNECT WITH US</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;