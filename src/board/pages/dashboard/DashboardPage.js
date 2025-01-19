import { Content } from "../../components";
import { UseDashboardContext } from "../../contexts/dashboard/DashboardContext";
import { BarChart } from "./component";

const DashboardPage = () => {
    const { analytics } = UseDashboardContext();

    return (
        <Content>
            <div className="flex gap-2">
                <div className="shadow-all bg-white-light rounded-md p-5 grow">
                    <div className="p-2">
                        <span className="font-bold text-base">Overview</span>
                    </div>
                    <div className="border-t border-white-muted p-2">
                        <BarChart series={analytics.series} titles={analytics.titles} />
                    </div>
                </div>
                <div className="shadow-all bg-white-light rounded-md p-5 min-w-80 w-80 max-w-80">
                    <div className="p-2">
                        <span className="font-bold text-base">Media Share</span>
                    </div>
                    <div className="border-t border-white-muted p-2 flex flex-col justify-center items-center relative">
                        <div className="grow flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-dark-muted" width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 18a1 1 0 0 1 .117 1.993l-.117 .007h-16a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M15.22 5.375a1 1 0 0 1 1.393 -.165l.094 .083l4 4a1 1 0 0 1 .284 .576l.009 .131v5a1 1 0 0 1 -.883 .993l-.117 .007h-16.022l-.11 -.009l-.11 -.02l-.107 -.034l-.105 -.046l-.1 -.059l-.094 -.07l-.06 -.055l-.072 -.082l-.064 -.089l-.054 -.096l-.016 -.035l-.04 -.103l-.027 -.106l-.015 -.108l-.004 -.11l.009 -.11l.019 -.105c.01 -.04 .022 -.077 .035 -.112l.046 -.105l.059 -.1l4 -6a1 1 0 0 1 1.165 -.39l.114 .05l3.277 1.638l3.495 -4.369z" /></svg>
                            <span>Analysis not yet available</span>
                            <small className="text-center">analysis to find out the number of media share views</small>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default DashboardPage;