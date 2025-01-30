import Footer from "../footer/Footer";
import LogoLoader from "../loader/LogoLoader";
import Navbar from "../navbar/Navbar";

const Content = ({ children, navbar, isLoader }) => {
    return (
        <div className="">
            <LogoLoader isLoader={isLoader ?? false} />
            <Navbar navbar={navbar} />
            <div className="grow overflow-hidden">{children}</div>
            <Footer />
        </div>
    );
}

export default Content;