import { ptCircle } from "../../assets";
import { Content } from "../../components";

const DevelopmentPage = () => {

    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            <div className="py-20 relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[30rem] w-[70%] opacity-10 "/>
                <div className="px-32">
                    <span className="text-4xl text-primary-dark font-semibold">Developer</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[80%] text-justify">
                        <span className="text-primary-dark">
                            As a trusted property developer, QTC focuses on creating residential communities and apartments that blend Contact
                            contemporary design with essential comforts. Our developments are crafted with the needs of urban dwellers in mind,
                            offering a range of modern amenities and accessible locations.
                        </span>
                    </div>
                    <div className="w-[80%] mt-10">
                        <span className="text-primary-dark">
                            We emphasize sustainability and community, ensuring that each property provides a lasting, high-quality living
                            experience that meets the expectations of discerning residents and property investors alike.
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

export default DevelopmentPage;