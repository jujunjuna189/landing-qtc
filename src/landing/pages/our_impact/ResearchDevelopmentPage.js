import { Content } from "../../components";

const ResearchDevelopmentPage = () => {
    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            <div className="py-20 relative">
                <div className="px-32">
                    <span className="text-4xl text-primary-dark font-semibold">Research {'&'} Development</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[80%] text-justify">
                        <span className="text-primary-dark">
                            QTC's Research {'&'} Development arm is dedicated to driving innovation and growth across all our business lines. Our
                            team focuses on sales strategies, market analysis, and business development initiatives that bring insight-driven
                            solutions to the forefront.
                        </span>
                    </div>
                    <div className="w-[80%] mt-10">
                        <span className="text-primary-dark">
                            By identifying market trends and optimizing operations, we help QTC stay at the cutting edge of each industry we Contact Career
                            operate in. The R{'&'}D team continually explores new avenues to enhance customer experience, expand market reach, and
                            bolster our competitive advantage.
                        </span>
                    </div>
                </div>
            </div>
            {/* Image */}
            <div className="grid grid-cols-3">
                <div className="border border-primary-dark flex justify-center items-center py-24">
                    <span className="text-4xl text-primary-dark font-semibold">
                        Image
                    </span>
                </div>
                <div className="border border-primary-dark flex justify-center items-center py-24">
                    <span className="text-4xl text-primary-dark font-semibold">
                        Image
                    </span>
                </div>
                <div className="border border-primary-dark flex justify-center items-center py-24">
                    <span className="text-4xl text-primary-dark font-semibold">
                        Image
                    </span>
                </div>
            </div>
        </Content>
    );
}

export default ResearchDevelopmentPage;