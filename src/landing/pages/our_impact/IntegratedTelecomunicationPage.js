import { ptCircle } from "../../assets";
import { Content } from "../../components";

const IntegratedTelecomunicationPage = () => {
    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            <div className="py-20 relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[30rem] w-[70%] opacity-10 "/>
                <div className="px-32">
                    <span className="text-4xl text-primary-dark font-semibold">Integrated Telecommunication</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[80%] text-justify">
                        <span className="text-primary-dark">
                            Our Integrated Telecommunications segment focuses on empowering businesses and communities with reliable,
                            high-speed internet and hotspot services, supported by innovative IoT solutions.
                        </span>
                    </div>
                    <div className="w-[80%] mt-10">
                        <span className="text-primary-dark">
                            With a comprehensive approach to connectivity, QTC helps organizations and individuals stay seamlessly connected in an
                            increasingly digital world. We provide advanced telecommunications solutions that not only meet current demands but
                            also pave the way for future digital transformations by enabling smart, connected environments.
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

export default IntegratedTelecomunicationPage;