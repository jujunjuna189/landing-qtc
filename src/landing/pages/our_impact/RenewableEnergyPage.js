import { Content } from "../../components";

const RenewableEnergyPage = () => {
    return (
        <Content navbar={{ style: "sticky top-0 bg-white-light" }}>
            <div className="py-20 relative">
                <div className="px-32">
                    <span className="text-4xl text-primary-dark font-semibold">Renewable Energy</span>
                    <div className="w-12 h-1 bg-secondary-dark" />
                </div>
                <div className="flex flex-col px-32 mt-12">
                    <div className="w-[80%] text-justify">
                        <span className="text-primary-dark">
                            Committed to a sustainable future, QTC's Renewable Energy unit delivers innovative solutions that reduce
                            environmental impact while enhancing energy efficiency. Specializing in solar panels, lithium battery storage systems,
                            and LED lighting, our offerings cater to both commercial and residential clients aiming to adopt cleaner energy.
                        </span>
                    </div>
                    <div className="w-[80%] mt-10">
                        <span className="text-primary-dark">
                            By integrating advanced technology with green practices, QTC helps clients reduce carbon emissions and transition
                            smoothly toward sustainable energy sources that lower operational costs and contribute positively to the environment.
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

export default RenewableEnergyPage;