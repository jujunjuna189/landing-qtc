
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../route";
import { Content } from "../../components";

const CommitmentPage = () => {
    const navigation = useNavigate();
    return (
        <Content navbar={{ style_nav: "text-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <div className="w-full h-[40vh] flex justify-start items-center px-24 bg-primary-dark">
                    <div className="flex flex-col gap-1 text-start mt-20">
                        <span className="text-white-light font-semibold">Quantum Trans Capital</span>
                        <span className="text-7xl text-white-light font-semibold">Commitment</span>
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
                        <li className="pl-5 pr-20 py-2 bg-primary-dark border-b cursor-pointer border-primary-dark text-white-light font-semibold" onClick={() => navigation(RouteName.sustainabilityCommitment)}>Commitment</li>
                        <li className="pl-5 pr-20 py-2  text-primary-dark border-b cursor-pointer border-primary-dark font-semibold" onClick={() => navigation(RouteName.sustainabilityStrategic)}>Our Strategic at QTC</li>
                        <li className="pl-5 pr-20 py-2  text-primary-dark border-b cursor-pointer border-primary-dark font-semibold" onClick={() => navigation(RouteName.sustainabilityPartnerships)}>Partnerships</li>
                    </ul>
                </div>
                <div className="bg-gray-dark grow p-16">
                    <span className="text-2xl text-primary-dark font-semibold">
                        As a holding investment company, we aim to
                        connect investors, entrepreneurs, and innovative
                        projects to foster growth and positively impact
                        the Indonesian economy.
                    </span>
                    <div className="mt-10">
                        <span className="text-primary-dark">
                            Sustainability guides our operations, ensuring our practices are efficient, environmentally responsible,
                            and socially conscious. We focus on renewable energy and sustainable real estate to build a better future.
                            We prioritize sustainable value for all stakeholders, enhancing performance within our group to benefit
                            everyone involved. Diversifying the economy is key to strengthening Indonesia’s resilience and global
                            competitiveness.
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-primary-dark">
                            Leading with ethics and transparency, we foster trustworthy partnerships. We are also committed to
                            empowering local communities through inclusive economic growth and impactful investments.
                        </span>
                    </div>
                    <div className="mt-10">
                        <span className="text-primary-dark">
                            Through these efforts, Quantum Trans Capital strives to be a leader in creating a sustainable and
                            innovative investment ecosystem in Indonesia.
                        </span>
                    </div>
                </div>
            </div>
            <div className="my-40" />
        </Content>
    );
}

export default CommitmentPage;