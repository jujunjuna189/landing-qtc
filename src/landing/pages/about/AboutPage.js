import { useEffect } from "react";
import { img3, img4 } from "../../assets";
import { Content } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const AboutPage = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img3,
        img4,
    ];

    useEffect(() => {
        images.forEach(preloadImage);
    }, [images]);

    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={images[0]} alt="Image5" className="object-cover object-center w-full h-[40vh]" loading="lazy" />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center px-24">
                    <div className="flex flex-col gap-3 text-center">
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>Connect evolving needs with</span>
                        <span className="text-5xl text-white-light font-semibold" style={{ textShadow: "0px 1px 10px #B8B8B8" }}>sustainable innovation opportunities</span>
                    </div>
                </div>
            </div>
            {/* Who we are */}
            <div className="pt-56 pb-32 relative flex flex-row">
                <div className="flex-1 h-full">
                    <div className="px-20">
                        <span className="text-2xl text-primary-dark font-medium">Who we are</span>
                        <div className="w-12 h-1 bg-secondary-dark" />
                    </div>
                    <div className="flex flex-col px-20 mt-16">
                        <span className="text-4xl text-primary-dark font-semibold">Investing for Sustainable</span>
                        <span className="text-4xl text-primary-dark font-semibold">Growth in Indonesia</span>
                    </div>
                    <div className="flex flex-col gap-6 px-20 mt-12">
                        <span className="text-primary-dark">
                            Quantum Trans Capital is a dynamic and versatile global company that
                            specializes in bridging and funding investment opportunities across
                            multiple sectors.
                        </span>
                        <span className="text-primary-dark">
                            Quantum Trans Capital is also a PMA from Hong Kong.
                        </span>
                        <span className="text-primary-dark">
                            Our mission is to facilitate growth, innovation and sustainable
                            development by connecting investors, entrepreneurs and projects.
                        </span>
                        <span className="text-primary-dark">
                            With a focus on capital, renewable energy, real estate, and other
                            industrial needs, Quantum Trans Capital plays an important role in
                            shaping the global economic landscape.
                        </span>
                    </div>
                </div>
                <div className="pr-20 flex-1">
                    <div className="bg-primary-dark w-full h-full">
                        <img src={images[1]} alt="Image5" className="object-cover object-center w-full h-full" loading="lazy" />
                    </div>
                </div>
            </div>
            {/* Visi Misi */}
            <div className="mb-20 relative flex gap-5 flex-row">
                <div className="flex-1 pl-20">
                    <div className="bg-gray-dark h-full py-24">
                        <div className="px-12">
                            <span className="text-2xl text-primary-dark font-medium">Our Vision</span>
                            <div className="w-12 h-1 bg-secondary-dark" />
                        </div>
                        <div className="flex flex-col gap-6 px-12 mt-12">
                            <span className="text-primary-dark">
                                Quantum Trans Capital envisions a prosperous Indonesia
                                where sustainable investments drive economic growth,
                                improve livelihoods, and protect the environment.
                            </span>
                            <span className="text-primary-dark">
                                We strive to be a catalyst for positive change, fostering
                                innovation and resilience.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="pr-20 flex-1">
                    <div className="bg-gray-dark w-full h-full py-24">
                        <div className="px-12">
                            <span className="text-2xl text-primary-dark font-medium">Our Mission</span>
                            <div className="w-12 h-1 bg-secondary-dark" />
                        </div>
                        <div className="flex flex-col gap-6 px-12 mt-12">
                            <span className="text-primary-dark text-[18px]">
                                Quantum Trans Capital is committed to transforming Indonesia's economic
                                landscape through strategic, high-impact investments.
                            </span>
                            <span className="text-primary-dark text-[18px]">
                                Our mission is to bridge the gap between visionary projects and strategic
                                investors, fostering sustainable growth, financial innovation, and long-term
                                value creation. Leveraging our expertise in capital markets, asset
                                management, and sector-focused financing within renewable energy, real
                                estate, and industrial development, we are dedicated to delivering
                                measurable returns while ensuring responsible growth.
                            </span>
                            <span className="text-primary-dark text-[18px]">
                                Quantum Trans Capital stands as a catalyst for progress, connecting
                                opportunities and shaping a brighter future.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="bg-primary-dark py-10 mt-24 px-20">
                <span className="text-4xl text-white-light font-semibold">Quantum Trans Capital Leadership</span>
                <div className="w-12 h-1 bg-secondary-dark" />
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-1 mt-20 flex-1">
                        <span className="text-4xl text-white-light font-semibold">Our people are our</span>
                        <span className="text-4xl text-white-light font-semibold">greatest strength</span>
                    </div>
                    <div className="mt-20 flex-1">
                        <span className="text-white-light text-[18px]">
                            Quantum Trans Capital focuses on building a global
                            ecosystem that drives growth, technology and innovation
                            opportunities for shareholders, companies and countries.
                        </span>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default AboutPage;