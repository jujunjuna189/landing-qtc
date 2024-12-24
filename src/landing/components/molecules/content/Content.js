import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Content = ({ children, navbar }) => {
    return (
        <div className="">
            <Navbar navbar={navbar} />
            <div className="grow">{children}</div>
            <Footer />
        </div>
    );
}

export default Content;