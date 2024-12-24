import { Content } from "../../components";

const RealEstatePropertyPage = () => {
    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            <div className="py-20 relative">
                <div className="px-32">
                    <span className="text-4xl text-primary-dark font-semibold">Real Estate {'&'} Property</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[80%] text-justify">
                        <span className="text-primary-dark">
                            Quantum Trans Capital's Real Estate {'&'} Property branch develops and manages high-quality commercial buildings and
                            shophouses strategically located in thriving areas.
                        </span>
                    </div>
                    <div className="w-[80%] mt-10">
                        <span className="text-primary-dark">
                            With a commitment to sustainable and functional design, our properties are tailored to meet the diverse needs of
                            modern businesses and entrepreneurs. Each development prioritizes accessibility, style, and durability, creating spaces
                            that attract clients and elevate their business presence in the market.
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

export default RealEstatePropertyPage;