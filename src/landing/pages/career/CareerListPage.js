
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../route";
import { img7 } from "../../assets";
import { Content } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const CareerListPage = () => {
    const navigation = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img7,
    ];

    useEffect(() => {
        images.forEach(preloadImage);
    }, [images]);

    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <div className="w-full py-20 flex justify-start items-center px-20 bg-primary-dark">
                    <div className="grow flex flex-col gap-1 text-start">
                        <div className="">
                            <span className="text-white-light font-semibold">Career</span>
                        </div>
                        <span className="text-7xl text-white-light font-semibold">Why Join Us ?</span>
                        <div className="w-36 h-3 bg-secondary-dark mt-2" />
                    </div>
                </div>
            </div>
            <div className="relative gap-20 mt-20 pr-72">
                <div className="px-32 pt-5">
                    <div className="flex flex-col border-b border-primary-dark py-3">
                        <span className="font-medium text-primary-dark">Career Development :</span>
                        <span className="text-primary-dark">
                            We support the growth and development of every individual through continuous
                            training, mentoring, and long-term capacity-building opportunities.
                        </span>
                    </div>
                    <div className="flex flex-col border-b border-primary-dark py-3">
                        <span className="font-medium text-primary-dark">Collaborative Environment :</span>
                        <span className="text-primary-dark">
                            At Quantum Trans Capital, we believe that teamwork is the foundation for achieving
                            shared goals and creating innovative solutions.
                        </span>
                    </div>
                    <div className="flex flex-col border-b border-primary-dark py-3">
                        <span className="font-medium text-primary-dark">Social and Environmental Impact :</span>
                        <span className="text-primary-dark">
                            We are committed to investing in sectors that are not only financially rewarding but
                            also create a positive impact on society and the environment.
                        </span>
                    </div>
                    <div className="flex flex-col border-b border-primary-dark py-3">
                        <span className="font-medium text-primary-dark">Global Opportunities :</span>
                        <span className="text-primary-dark">
                            As a holding company operating across multiple sectors and international markets,
                            we offer opportunities for employees to work in diverse global environments.
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-16 px-32">
                <div className="pr-72">
                    <span className="font-medium text-primary-dark">
                        If you are passionate about contributing to a sustainable and innovative investment ecosystem, we
                        invite you to explore our career opportunities and join our dynamic team.
                    </span>
                </div>
            </div>
            <div className="flex gap-3 mt-16 px-32">
                <div className="border border-primary-dark bg-primary-dark flex flex-col justify-center items-center py-2 px-5 cursor-pointer" onClick={() => navigation(RouteName.careerExplore)}>
                    <i className="text-white-light font-semibold">
                        Explore our current job opportunities
                    </i>
                </div>
            </div>
            <div className="my-20" />
        </Content>
    );
}

export default CareerListPage;