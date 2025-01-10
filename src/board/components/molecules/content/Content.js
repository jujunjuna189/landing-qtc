import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const Content = ({ children, navbar }) => {
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col bg-gradient-to-b from-white-light to-[#e0f2fe]">
            <Navbar navbar={navbar} />
            <div className="grow flex">
                <Sidebar />
                <div className="grow p-2">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Content;