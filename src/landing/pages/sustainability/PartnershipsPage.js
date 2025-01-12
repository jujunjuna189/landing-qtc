
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../route";
import { Content } from "../../components";
import { ptCircle } from "../../assets";

const PartnershipsPage = () => {
    const navigation = useNavigate();
    return (
        <Content navbar={{ style_nav: "text-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -top-[25rem] -right-[20rem] w-[70%] opacity-10 "/>
                <div className="w-full h-[40vh] flex justify-start items-center px-24 bg-primary-dark">
                    <div className="flex flex-col gap-1 text-start mt-20">
                        <span className="text-white-light font-semibold">Quantum Trans Capital</span>
                        <span className="text-7xl text-white-light font-semibold">Partnerships</span>
                        <div className="w-36 h-3 bg-secondary-dark mt-2" />
                    </div>
                </div>
            </div>
            <div className="py-10 relative px-20">
                <div className="flex gap-2 items-center">
                    <span className="text-xl text-primary-dark font-semibold">Sustainability in</span>
                    <div className="py-1 px-2 text-xl font-medium bg-secondary-dark text-white-light">Action</div>
                </div>
            </div>
            <div className="relative flex gap-20 px-20">
                <div className="w-72 min-w-72 max-w-72">
                    <ul>
                        <li className="pl-5 pr-20 py-2  text-primary-dark border-b cursor-pointer border-primary-dark font-semibold" onClick={() => navigation(RouteName.sustainabilityCommitment)}>Commitment</li>
                        <li className="pl-5 pr-20 py-2  text-primary-dark border-b cursor-pointer border-primary-dark font-semibold" onClick={() => navigation(RouteName.sustainabilityStrategic)}>Our Strategic at QTC</li>
                        <li className="pl-5 pr-20 py-2 bg-primary-dark border-b cursor-pointer border-primary-dark text-white-light font-semibold" onClick={() => navigation(RouteName.sustainabilityPartnerships)}>Partnerships</li>
                    </ul>
                </div>
                <div className="bg-gray-dark grow p-16">
                    <span className="text-2xl text-primary-dark font-semibold">
                        Building Strong Partnerships for Sustainable
                        Growth and Innovation
                    </span>
                    <div className="mt-10">
                        <span className="text-primary-dark">
                            Quantum Trans Capital views partnerships as a key element of our growth strategy. We are
                            committed to building strong relationships with investors, entrepreneurs, and industry leaders,
                            both locally and internationally.
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-primary-dark">
                            We believe that collaboration can drive innovation and create greater opportunities. By adhering to
                            principles of ethics and transparency, we foster an environment of mutual respect.
                        </span>
                    </div>
                    <div className="mt-10">
                        <span className="text-primary-dark">
                            Through strategic partnerships, we integrate resources to develop projects that are financially
                            beneficial and positively impacts society and the environment. Our main focus is on sustainable  sectors like renewable energy.
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-primary-dark">
                            We also support the capacity development of our partners, providing access to opportunities and
                            resources to strengthen their market position. In this way, Quantum Trans Capital aims to create a
                            sustainable and innovative investment ecosystem for a more united future.
                        </span>
                    </div>
                </div>
            </div>
            <div className="my-40" />
        </Content>
    );
}

export default PartnershipsPage;