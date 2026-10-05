import { ptCircle } from "../../assets";
import { Button, Content, FieldArea, FieldInlineFile, FieldText } from "../../components";
import { UseContactContext } from "../../contexts/contact/ContactContext";

const ContactPage = () => {
    const { language, images, controller, onSetController, onSave } = UseContactContext();

    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={images[1]} alt="Image5" className="object-cover w-full h-[40vh] animate-fade animate-duration-400" loading="lazy" style={{ objectPosition: "0 -130px" }} />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-end items-center px-24">
                    <div className="flex flex-col gap-3 text-end">
                        <span className="text-5xl text-primary-dark font-semibold">{language[1.1]}</span>
                        <span className="text-5xl text-primary-dark font-semibold">{language[1.2]}</span>
                    </div>
                </div>
            </div>
            <div className="py-20 relative">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[20rem] -right-[20rem] w-[60%] opacity-10 " />
                <div className="px-32">
                    <span className="text-2xl text-primary-dark font-semibold">{language[2]}</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="grid grid-cols-2 px-32 mt-12">
                    <div className="pr-20 flex flex-col">
                        <div className="flex flex-col gap-10">
                            <span className="text-primary-dark">
                                {language[3]}
                            </span>
                            <span className="text-primary-dark font-semibold">
                                {language[4]}
                            </span>
                        </div>
                        <div className="mt-28 mb-16 grow bg-primary-dark py-10 px-10">
                            <span className="text-xl text-white-light font-semibold">{language[5]}</span>
                            <div className="w-12 h-1 bg-secondary-dark" />
                            <hr className="my-10 border-gray-dark" />
                            <div className="">
                                <span className="text-xl text-white-light font-semibold">{language[6]}</span>
                                <div className="flex gap-5 mt-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white-light w-20" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7" /><path d="M9 4v13" /><path d="M15 7v5" /><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><path d="M19 18v.01" /></svg>
                                    <span className="text-white-light">
                                        Jl. Ruko Raffles Hills Blok LT No 20, Sukatani, Kec. Tapos, Kota Depok, Jawa Barat 16454
                                    </span>
                                </div>
                            </div>
                            <hr className="my-10 border-gray-dark" />
                            <span className="text-xl text-white-light font-semibold">{language[7]}</span>
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
                            {language[8]}
                        </span>
                        <div className="mt-10">
                            <div className="flex gap-3">
                                <div className="grow">
                                    <span className="uppercase text-primary-dark">{language[9]} <span className="text-danger-dark">*</span></span>
                                    <FieldText value={controller.first_name} onChange={(value) => onSetController({ field: 'first_name', value })} />
                                </div>
                                <div className="grow">
                                    <span className="uppercase text-primary-dark">{language[10]} <span className="text-danger-dark">*</span></span>
                                    <FieldText value={controller.last_name} onChange={(value) => onSetController({ field: 'last_name', value })} />
                                </div>
                            </div>
                            <div className="flex gap-3 mt-8">
                                <div className="grow">
                                    <span className="uppercase text-primary-dark">{language[11]} <span className="text-danger-dark">*</span></span>
                                    <FieldText value={controller.email_address} onChange={(value) => onSetController({ field: 'email_address', value })} />
                                </div>
                                <div className="grow">
                                    <span className="uppercase text-primary-dark">{language[12]} <span className="text-danger-dark">*</span></span>
                                    <FieldText value={controller.contact_number} onChange={(value) => onSetController({ field: 'contact_number', value })} />
                                </div>
                            </div>
                            <div className="mt-8">
                                <span className="uppercase text-primary-dark">{language[13]} <span className="text-danger-dark">*</span></span>
                                <FieldText value={controller.inquiry_type} onChange={(value) => onSetController({ field: 'inquiry_type', value })} />
                            </div>
                            <div className="mt-8">
                                <span className="uppercase text-primary-dark">{language[14]}</span>
                                <FieldInlineFile value={controller.attachment?.preview} onChange={(value) => onSetController({ field: 'attachment', value: value })} />
                            </div>
                            <div className="mt-8">
                                <span className="uppercase text-primary-dark">{language[15]}</span>
                                <FieldText value={controller.subject} onChange={(value) => onSetController({ field: 'subject', value })} />
                            </div>
                            <div className="mt-8">
                                <span className="uppercase text-primary-dark">{language[16]}</span>
                                <FieldArea value={controller.message} onChange={(value) => onSetController({ field: 'message', value })} />
                            </div>
                            <div className="mt-5 flex justify-end">
                                <Button onClick={() => onSave()}>
                                    <span className="text-white-light uppercase">{language[18]}</span>
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
                        src="https://www.google.com/maps?q=Jl.%20Ruko%20Raffles%20Hills%20Blok%20LT%20No%2020,%20Sukatani,%20Kec.%20Tapos,%20Kota%20Depok,%20Jawa%20Barat%2016454&output=embed"
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
