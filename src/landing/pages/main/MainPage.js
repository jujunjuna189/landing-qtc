import { useEffect } from "react";
import { img12, img13, img5 } from "../../assets";
import { Content } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const MainPage = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img5,
        img13,
        img12,
    ];

    useEffect(() => {
        images.forEach(preloadImage);
    }, [images]);

    return (
        <Content>
            {/* Jumbotron */}
            <div className="relative">
                <img src={images[0]} alt="Image5" className="object-cover object-top w-full h-[80vh]" loading="lazy" />
                <div className="absolute top-0 bottom-0 flex items-center px-24 pt-28">
                    <div className="flex flex-col gap-3">
                        <span className="text-2xl text-white-light" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>Quantum Trans Capital</span>
                        <div className="flex flex-col">
                            <span className="text-4xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>Sharing Investment Opportunities</span>
                            <span className="text-4xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>All Around Indonesia</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Who We Are */}
            <div className="relative py-20">
                <div className="px-32">
                    <span className="text-2xl text-primary-dark font-medium">Who We Are</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-36 mt-16">
                    <span className="text-4xl text-primary-dark font-semibold">Connecting Global Investors and Real Time</span>
                    <span className="text-4xl text-primary-dark font-semibold">Sustainable Projects in Indonesia</span>
                </div>
                <div className="bg-primary-dark py-10 mt-24 relative">
                    <div className="w-[19vw] max-w-[19vw] min-w-[19vw] absolute bottom-0 top-0 bg-white-light" />
                    <div className="flex gap-16 px-12 items-center relative">
                        <div>
                            <img src={images[1]} alt="Image5" className="aspect-square object-cover object-top w-[32vw] max-w-[32vw] min-w-[32vw]" loading="lazy" />
                        </div>
                        <div className="flex flex-col gap-1 pr-20">
                            <span className="text-4xl text-white-light font-semibold">A Resilient and Secure</span>
                            <span className="text-4xl text-white-light font-semibold">Holding Company with</span>
                            <span className="text-4xl text-white-light font-semibold">Diversified Energy Related</span>
                            <span className="text-4xl text-white-light font-semibold"> Operating Assets</span>
                            <div className="mt-12">
                                <span className="text-white-light font-light">
                                    Quantum Trans Capital, we drive positive change in Indonesia's economy by bridging
                                    visionary projects with strategic investors.
                                </span>
                            </div>
                            <div className="mt-12">
                                <span className="text-white-light font-light">
                                    Our focus on capital investment, renewable energy, real estate, and industrial needs fosters
                                    growth, innovation, and sustainability. As a catalyst for progress, Quantum Trans Capital
                                    connects opportunities and shapes a brighter future.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Impact */}
            <div className="bg-gray-dark py-20 relative">
                <div className="px-32">
                    <span className="text-2xl text-primary-dark font-medium">Our Impact</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-36 mt-12">
                    <div className="w-[60%]">
                        <span className="text-primary-dark font-medium">
                            Quantum Trans Capital is an Indonesian company specializing in facilitating
                            and funding investment opportunities across diverse sectors.
                        </span>
                    </div>
                </div>
            </div>
            {/* Bussiness Highlights */}
            <div className="relative">
                <div className="absolute top-0 bottom-0 left-0 right-0">
                    <img src={images[2]} alt="Image5" className="object-cover object-bottom h-full w-full" loading="lazy" />
                </div>
                <div className="py-28 relative">
                    <div className="px-32">
                        <span className="text-2xl text-primary-dark font-medium">Business Highlights</span>
                        <div className="w-12 h-1 bg-secondary-dark" />
                    </div>
                    <div className="flex flex-col px-36 mt-12">
                        <div className="w-[50%]">
                            <span className="text-primary-dark font-medium">
                                Quantum Trans Capital has brought leading projects, destinations
                                and untapped opportunities to market through key partnerships and
                                investments in the region and beyond.
                            </span>
                        </div>
                    </div>
                    <div className="h-[40vh]" />
                    <div className="flex items-center gap-3 px-36">
                        <span className="text-secondary-dark text-5xl font-medium" style={{ textShadow: "0px 1px 10px #4B4B4B" }}>o</span>
                        <div className="mt-1">
                            <span className="text-white-light text-4xl font-medium" style={{ textShadow: "0px 1px 10px #4B4B4B" }}>Renewable Energy</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sustainability */}
            <div className="py-20 relative flex flex-row">
                <div className="flex-1 h-full py-24">
                    <div className="px-32">
                        <span className="text-2xl text-primary-dark font-medium">Sustainability</span>
                        <div className="w-12 h-1 bg-secondary-dark" />
                    </div>
                    <div className="flex flex-col gap-6 px-36 mt-12">
                        <span className="text-primary-dark">
                            <b>Quantum Trans Capital,</b> sustainability is a fundamental
                            principle underlying our strategic direction and operational
                            excellence.
                        </span>
                        <span className="text-primary-dark">
                            We are committed to delivering sustainable value for our
                            stakeholders, while improving the performance of each line
                            company.
                        </span>
                        <span className="text-primary-dark">
                            Our business is guided by sustainability principles that shape
                            our strategic direction and operational excellence.
                        </span>
                    </div>
                </div>
                <div className="pr-20 flex-1">
                    <div className="bg-primary-dark w-full h-full py-24">
                        <div className="px-12">
                            <span className="text-2xl text-white-light font-medium">Sustainability</span>
                            <div className="w-12 h-1 bg-secondary-dark" />
                        </div>
                        <div className="flex flex-col gap-6 px-12 mt-12">
                            <span className="text-white-light text-[18px]">
                                Keep track of all the exciting news and opportunities as we
                                grow our network by entering new markets, forging new
                                partnerships, and our latest resources
                            </span>
                        </div>
                        <div className="mt-10 px-12 flex">
                            <div className="bg-white-light px-8 py-2">
                                <span className="text-primary-dark font-semibold">Explore our media centre</span>
                            </div>
                        </div>
                        <div className="h-[20vh]" />
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default MainPage;