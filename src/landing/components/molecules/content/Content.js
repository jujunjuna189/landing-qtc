import Footer from "../footer/Footer";
import LogoLoader from "../loader/LogoLoader";
import Navbar from "../navbar/Navbar";

const Content = ({ children, navbar }) => {
    return (
        <div className="">
            <LogoLoader/>
            <Navbar navbar={navbar} />
            <div className="grow overflow-hidden">{children}</div>
            <Footer />
        </div>
    );
}

export default Content;