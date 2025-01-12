import { ptCircle } from "../../assets";
import { Content } from "../../components";

const EPCPage = () => {
    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            <div className="py-20 relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[30rem] w-[70%] opacity-10 "/>
                <div className="px-32">
                    <span className="text-4xl text-primary-dark font-semibold">EPC (Engineering, Procurement, and Construction)</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[80%] text-justify">
                        <span className="text-primary-dark">
                            In the EPC sector, QTC provides seamless, integrated engineering, procurement, and construction services to take
                            projects from concept to completion. Our experts oversee every phase, from detailed engineering design to sourcing
                            high-quality materials and managing installation processes.
                        </span>
                    </div>
                    <div className="w-[80%] mt-10">
                        <span className="text-primary-dark">
                            By maintaining strict standards in safety, quality, and efficiency, we ensure that each project we undertake not only
                            meets but exceeds industry standards. This all-encompassing approach allows our clients to benefit from streamlined
                            processes, faster project timelines, and cost-effective outcomes.
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

export default EPCPage;