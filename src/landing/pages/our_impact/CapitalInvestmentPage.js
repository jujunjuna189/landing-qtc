import { Content } from "../../components";

const CapitalInvestmentPage = () => {
    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            <div className="py-20 relative">
                <div className="px-32">
                    <span className="text-4xl text-primary-dark font-semibold">Capital Investment</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[80%] text-justify">
                        <span className="text-primary-dark">
                            Quantum Trans Capital’s Capital Investment business line focuses on creating significant value through strategic equity
                            placements and dedicated asset management solutions. We partner with organizations and shareholders to drive growth
                            and stability, offering access to tailored investment opportunities.
                        </span>
                    </div>
                    <div className="w-[80%] mt-10">
                        <span className="text-primary-dark">
                            Our team ensures that every equity placement aligns with our rigorous criteria for long-term viability and profitability,
                            fostering sustainable value for our investors. Through expert asset management, QTC prioritizes balanced portfolios that
                            generate strong returns while managing risk.
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

export default CapitalInvestmentPage;