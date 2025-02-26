import { RouteName } from "../../../route";
import { ptCircle } from "../../assets";
import { Content } from "../../components";
import { UseBusinessPreviewContext } from "../../contexts/business/BusinessPreviewContext";
import { BusinessCarousel, ProductCarousel } from "./components";

const BusinessPreviewPage = () => {
    const { business, businessDetail, navigation, isLoader, images, product } = UseBusinessPreviewContext();
    return (
        <Content isLoader={isLoader} navbar={{ style: "sticky top-0 bg-white-light" }}>
            {/* Jumbotron */}
            <div className="relative">
                <img src={images[0]} alt="Image5" className="object-cover object-bottom w-full h-[70vh] animate-fade animate-duration-400 animate-duration-400" loading="lazy" />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-start items-center px-24">
                    <div className="flex flex-col gap-10 text-start">
                        <span className="text-8xl text-white-light font-semibold">Leading For Solar</span>
                        <span className="text-8xl text-white-light font-semibold">PV Technology</span>
                    </div>
                </div>
            </div>
            {/* Who we are */}
            <div className="pt-32 pb-32 relative flex flex-row px-20">
                <img src={ptCircle} alt="PattrenQTCDesign" className="animate-spin-slow absolute -z-10 -top-[25rem] -right-[20rem] w-[60%] opacity-10 " />
                <div className="grow w-[50rem] flex justify-center">
                    <div className="w-[20rem] h-[20rem] rounded-full flex justify-center items-center overflow-hidden">
                        <img src={businessDetail.logo} alt="Image5" className="object-contain object-bottom h-[20rem] aspect-video animate-fade animate-duration-400" loading="lazy" />
                    </div>
                </div>
                <div className="grow h-full">
                    <div className="px-20">
                        <span className="text-3xl text-primary-dark font-semibold">{businessDetail.name}</span>
                        <div className="w-12 h-1 bg-secondary-dark" />
                    </div>
                    <div className="flex flex-col gap-6 px-20 mt-12">
                        <div className="mt-3 text-primary-dark w-[80%]" style={{ display: 'flex', whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: businessDetail.description }} />
                    </div>
                    <div className="mt-20 flex gap-3 text-primary-dark px-20 font-semibold" onClick={() => window.open(businessDetail.redirect)}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                        </span>
                        <span>
                            Go To The Website Page {businessDetail.name}
                        </span>
                    </div>
                </div>
            </div>
            {/* Bussines */}
            <div className="mt-10">
                {product.data?.length > 0 && (
                    <ProductCarousel />
                )}
            </div>
            <div className="gap-10 mt-20 mb-10 flex justify-center">
                {business.data?.length > 0 && (
                    <BusinessCarousel data={businessDetail} onGet={(value) => navigation(`${RouteName.businessPreview}/${value.id}`)} />
                )}
            </div>
        </Content>
    );
}

export default BusinessPreviewPage;