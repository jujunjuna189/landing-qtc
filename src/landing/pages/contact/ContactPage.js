import { useEffect } from "react";
import { img11, ptCircle } from "../../assets";
import { Button, Content, FieldArea, FieldText } from "../../components";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const ContactPage = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img11,
    ];

    useEffect(() => {
        images.forEach(preloadImage);
    }, [images]);

    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={images[0]} alt="Image5" className="object-cover w-full h-[40vh] animate-fade animate-duration-400" loading="lazy" style={{ objectPosition: "0 -130px" }} />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-end items-center px-24">
                    <div className="flex flex-col gap-3 text-end">
                        <span className="text-5xl text-primary-dark font-semibold">Connect with</span>
                        <span className="text-5xl text-primary-dark font-semibold">Quantum Trans Capital</span>
                    </div>
                </div>
            </div>
            <div className="py-20 relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[20rem] -right-[20rem] w-[70%] opacity-10 "/>
                <div className="px-32">
                    <span className="text-2xl text-primary-dark font-semibold">Contact Us :</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="grid grid-cols-2 px-32 mt-12">
                    <div className="pr-20 flex flex-col">
                        <div className="flex flex-col gap-10">
                            <span className="text-primary-dark">
                                For inquiries or more information about our
                                services and opportunities, please reach out via the
                                contact form below or use the details provided.
                            </span>
                            <span className="text-primary-dark font-semibold">
                                Our team is ready to assist you, and we look
                                forward to connecting !
                            </span>
                        </div>
                        <div className="mt-28 mb-16 grow bg-primary-dark py-10 px-10">
                            <span className="text-xl text-white-light font-semibold">GET IN TOUCH</span>
                            <div className="w-12 h-1 bg-secondary-dark" />
                            <hr className="my-10 border-gray-dark" />
                            <div className="">
                                <span className="text-xl text-white-light font-semibold">Head Office</span>
                                <div className="flex gap-5 mt-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white-light w-20" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7" /><path d="M9 4v13" /><path d="M15 7v5" /><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><path d="M19 18v.01" /></svg>
                                    <span className="text-white-light">
                                        Jl. Wijaya I No.71, RT.10/RW.1,
                                        Petogogan, Kec. Kby. Baru,  Kota Jakarta Selatan,
                                        Daerah Khusus Ibukota Jakarta, 12170
                                    </span>
                                </div>
                                <div className="flex gap-5 mt-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white-light" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                                    <span className="text-white-light">
                                        +62 813 0323 5001
                                    </span>
                                </div>
                            </div>
                            <hr className="my-10 border-gray-dark" />
                            <span className="text-xl text-white-light font-semibold">Connect with Us</span>
                            <div className="mt-5 flex gap-3">
                                <div className="rounded-full bg-white-light w-10 h-10"></div>
                                <div className="rounded-full bg-white-light w-10 h-10"></div>
                                <div className="rounded-full bg-white-light w-10 h-10"></div>
                                <div className="rounded-full bg-white-light w-10 h-10"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="font-semibold text-primary-dark">
                            Here you can send us an inquiry concering general questions
                        </span>
                        <div className="mt-10">
                            <div className="flex gap-3">
                                <div className="grow">
                                    <span className="uppercase text-primary-dark">First Name <span className="text-danger-dark">*</span></span>
                                    <FieldText />
                                </div>
                                <div className="grow">
                                    <span className="uppercase text-primary-dark">Last Name <span className="text-danger-dark">*</span></span>
                                    <FieldText />
                                </div>
                            </div>
                            <div className="flex gap-3 mt-8">
                                <div className="grow">
                                    <span className="uppercase text-primary-dark">Email Address <span className="text-danger-dark">*</span></span>
                                    <FieldText />
                                </div>
                                <div className="grow">
                                    <span className="uppercase text-primary-dark">Contact Number <span className="text-danger-dark">*</span></span>
                                    <FieldText />
                                </div>
                            </div>
                            <div className="mt-8">
                                <span className="uppercase text-primary-dark">INQUIRY TYPE <span className="text-danger-dark">*</span></span>
                                <FieldText />
                            </div>
                            <div className="mt-8">
                                <span className="uppercase text-primary-dark">FILE ATTACHMENT</span>
                                <FieldText />
                            </div>
                            <div className="mt-8">
                                <span className="uppercase text-primary-dark">Subject</span>
                                <FieldText />
                            </div>
                            <div className="mt-8">
                                <span className="uppercase text-primary-dark">Message</span>
                                <FieldArea />
                            </div>
                            <div className="mt-5 flex justify-end">
                                <Button>
                                    <span className="text-white-light uppercase">Submit</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Maps */}
            <div>
                <div style={{ width: "100%", height: "500px" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126906.97520362909!2d106.89097593334279!3d-6.284362415605013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1734288428822!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    />
                </div>
            </div>
        </Content>
    );
}

export default ContactPage;