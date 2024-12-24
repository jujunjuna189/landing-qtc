
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../route";
import { Content } from "../../components";

const CareerPage = () => {
    const navigation = useNavigate();
    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <div className="w-full h-[40vh] flex justify-start items-center px-24 bg-primary-dark">
                    <div className="flex flex-col gap-1 text-start">
                        <span className="text-white-light font-semibold">Career</span>
                        <span className="text-7xl text-white-light font-semibold">Career Opporturnies</span>
                        <div className="w-36 h-3 bg-secondary-dark mt-2" />
                    </div>
                </div>
            </div>
            <div className="py-20 relative">
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[60%] text-justify">
                        <span className="text-primary-dark">
                            At Quantum Trans Capital , we believe that the success of our company starts with a strong
                            and committed team. We strive to create a work environment that fosters professional
                            development, innovation, and collaboration.
                        </span>
                    </div>
                    <div className="w-[60%] mt-10">
                        <span className="text-primary-dark">
                            As a growing holding company, we are always on the lookout for talented individuals who
                            are passionate about contributing to our long-term value creation through sustainable
                            investments and positive impact.
                        </span>
                    </div>
                </div>
                {/* Image */}
                <div className="flex gap-3 mt-16 px-32">
                    <div className="border border-primary-dark bg-primary-dark flex flex-col justify-center items-center py-2 px-5 cursor-pointer" onClick={() => navigation(RouteName.careerExplore)}>
                        <i className="text-white-light font-semibold">
                            Explore our current job opportunities
                        </i>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default CareerPage;