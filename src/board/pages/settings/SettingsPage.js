import { Content } from "../../components";
import { Accordion } from "./component";

const SettingsPage = () => {

    return (
        <Content>
            <div className="shadow-all bg-white-light rounded-md px-7 py-5 grow">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="font-bold text-xl">Settings</span>
                        <small>Landing View Assets</small>
                    </div>
                </div>
                <div className="mt-5">
                    <Accordion />
                </div>
            </div>
        </Content>
    );
}

export default SettingsPage;