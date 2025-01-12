import { ptCircle } from "../../assets";
import { Content } from "../../components";

const IndustrialPage = () => {
    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            <div className="py-20 relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[30rem] w-[70%] opacity-10 "/>
                <div className="px-32">
                    <span className="text-4xl text-primary-dark font-semibold">Industrial</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[80%] text-justify">
                        <span className="text-primary-dark">
                            QTC's Industrial Solutions division supports diverse sectors with cutting-edge manufacturing and production
                            capabilities, helping businesses elevate efficiency and meet industry demands.
                        </span>
                    </div>
                    <div className="w-[80%] mt-10">
                        <span className="text-primary-dark">
                            We combine industry expertise with advanced technology to deliver robust industrial services tailored to the specific
                            needs of our clients. By providing custom solutions, we enable partners to optimize productivity, enhance quality
                            control, and streamline operations, resulting in maximized operational effectiveness and minimized costs.
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

export default IndustrialPage;