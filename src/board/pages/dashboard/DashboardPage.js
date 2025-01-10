import { Content } from "../../components";

const DashboardPage = () => {
    return (
        <Content>
            <div className="flex gap-2">
                <div className="shadow-all bg-white-light rounded-md p-5 grow">
                    <div className="">
                        <span className="font-bold text-base">Overview</span>
                    </div>
                </div>
                <div className="shadow-all bg-white-light rounded-md p-5 min-w-80 w-80 max-w-80">
                    <div className="">
                        <span className="font-bold text-base">Media Share</span>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default DashboardPage;