
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../route";
import { Content } from "../../components";

const StrategicPage = () => {
    const navigation = useNavigate();
    return (
        <Content navbar={{ style_nav: "text-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <div className="w-full h-[40vh] flex justify-start items-center px-24 bg-primary-dark">
                    <div className="flex flex-col gap-1 text-start mt-20">
                        <span className="text-white-light font-semibold">Quantum Trans Capital</span>
                        <span className="text-7xl text-white-light font-semibold">Our Strategic at QTC</span>
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
                        <li className="pl-5 pr-20 py-2 bg-primary-dark border-b cursor-pointer border-primary-dark text-white-light font-semibold" onClick={() => navigation(RouteName.sustainabilityStrategic)}>Our Strategic at QTC</li>
                        <li className="pl-5 pr-20 py-2  text-primary-dark border-b cursor-pointer border-primary-dark font-semibold" onClick={() => navigation(RouteName.sustainabilityPartnerships)}>Partnerships</li>
                    </ul>
                </div>
                <div className="bg-gray-dark grow p-16">
                    <span className="text-2xl text-primary-dark font-semibold">
                        Sustainable Investment: Diversification,
                        ESG, Innovation {'&'} Positive Impact
                    </span>
                    <div className="mt-10">
                        <span className="text-primary-dark">
                            We are committed to becoming a leader in sustainable investment through a diversified portfolio in
                            English
                            sectors like renewable energy, real estate, technology, and manufacturing to minimize risk and maximize
                            growth.
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-primary-dark">
                            Building strong partnerships with local, international investors and emphasizing socially and
                            environmentally responsible investments are our top priorities. We integrate ESG criteria into every
                            decision.
                        </span>
                    </div>
                    <div className="mt-10">
                        <span className="text-primary-dark">
                            Innovation and technology are key to our strategy, as we support startups tackling significant challenges.
                        </span>
                        <span className="text-primary-dark">
                            Market research informs our investment decisions.
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-primary-dark">
                            We empower entrepreneurs through capacity-building programs and engage with local communities for
                            positive social impact. Our robust risk management and performance monitoring protect stakeholder
                            interests.
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-primary-dark">
                            Through effective communication, we aim to strengthen our brand as a leader in sustainable investment,
                            creating an innovative ecosystem that drives growth for all.
                        </span>
                    </div>
                </div>
            </div>
            <div className="my-40" />
        </Content>
    );
}

export default StrategicPage;