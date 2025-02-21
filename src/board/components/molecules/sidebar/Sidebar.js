import { useLocation, useNavigate } from "react-router-dom";
import { RouteName } from "../../../../route";

const Sidebar = ({ sidebar }) => {
    const location = useLocation();
    const navigation = useNavigate();
    return (
        <aside className="p-2 w-56 max-w-56 min-w-56">
            <div className="rounded-md shadow-all w-full h-full bg-white-light overflow-y-auto p-1">
                <div className="">
                    <ul className="">
                        <li className={`py-2 pl-3 pr-2 text-sm rounded-md cursor-pointer ${location.pathname.split('/')?.[2] === 'dashboard' ? 'bg-primary-dark text-white-light' : 'hover:bg-white-muted hover:text-dark-dark'}`} onClick={() => navigation(RouteName.adminDashboard)}>
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 18a1 1 0 0 1 .117 1.993l-.117 .007h-16a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M15.22 5.375a1 1 0 0 1 1.393 -.165l.094 .083l4 4a1 1 0 0 1 .284 .576l.009 .131v5a1 1 0 0 1 -.883 .993l-.117 .007h-16.022l-.11 -.009l-.11 -.02l-.107 -.034l-.105 -.046l-.1 -.059l-.094 -.07l-.06 -.055l-.072 -.082l-.064 -.089l-.054 -.096l-.016 -.035l-.04 -.103l-.027 -.106l-.015 -.108l-.004 -.11l.009 -.11l.019 -.105c.01 -.04 .022 -.077 .035 -.112l.046 -.105l.059 -.1l4 -6a1 1 0 0 1 1.165 -.39l.114 .05l3.277 1.638l3.495 -4.369z" /></svg>
                                </span>
                                <span>Overview</span>
                            </div>
                        </li>
                        <li className={`py-2 pl-3 pr-2 text-sm rounded-md cursor-pointer ${location.pathname.split('/')?.[2] === 'business' ? 'bg-primary-dark text-white-light' : 'hover:bg-white-muted hover:text-dark-dark'}`} onClick={() => navigation(RouteName.adminBusiness)}>
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20.876 10.51a9 9 0 1 0 -7.839 10.43" /><path d="M3.6 9h16.8" /><path d="M3.6 15h9.9" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a16.986 16.986 0 0 1 2.578 9.02" /><path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M19 21v1m0 -8v1" /></svg>
                                </span>
                                <span>Business</span>
                            </div>
                        </li>
                        <li className={`py-2 pl-3 pr-2 text-sm rounded-md cursor-pointer ${location.pathname.split('/')?.[2] === 'product' ? 'bg-primary-dark text-white-light' : 'hover:bg-white-muted hover:text-dark-dark'}`} onClick={() => navigation(RouteName.adminProduct)}>
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 12l4 3l-8 7l-8 -7l4 -3" /><path d="M12 3l-8 6l8 6l8 -6z" /><path d="M12 15h8" /></svg>
                                </span>
                                <span>Product</span>
                            </div>
                        </li>
                        <li className={`py-2 pl-3 pr-2 text-sm rounded-md cursor-pointer ${location.pathname.split('/')?.[2] === 'news' ? 'bg-primary-dark text-white-light' : 'hover:bg-white-muted hover:text-dark-dark'}`} onClick={() => navigation(RouteName.adminNews)}>
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" /><path d="M8 8l4 0" /><path d="M8 12l4 0" /><path d="M8 16l4 0" /></svg>
                                </span>
                                <span>News</span>
                            </div>
                        </li>
                        <li className={`py-2 pl-3 pr-2 text-sm rounded-md cursor-pointer ${location.pathname.split('/')?.[2] === 'question' ? 'bg-primary-dark text-white-light' : 'hover:bg-white-muted hover:text-dark-dark'}`} onClick={() => navigation(RouteName.adminQuestion)}>
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" /><path d="M12 16v.01" /><path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /></svg>
                                </span>
                                <span>Question</span>
                            </div>
                        </li>
                        <li className={`py-2 pl-3 pr-2 text-sm rounded-md cursor-pointer ${location.pathname.split('/')?.[2] === 'assets' ? 'bg-primary-dark text-white-light' : 'hover:bg-white-muted hover:text-dark-dark'}`} onClick={() => navigation(RouteName.adminAssets)}>
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 3v4a1 1 0 0 0 1 1h4" /><path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" /><path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" /></svg>
                                </span>
                                <span>Assets</span>
                            </div>
                        </li>
                        <li className={`py-2 pl-3 pr-2 text-sm rounded-md cursor-pointer ${location.pathname.split('/')?.[2] === 'career' ? 'bg-primary-dark text-white-light' : 'hover:bg-white-muted hover:text-dark-dark'}`} onClick={() => navigation(RouteName.adminCareer)}>
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg>
                                </span>
                                <span>Career</span>
                            </div>
                        </li>
                        <li className="text-dark-muted py-2 bg-white-muted text-sm px-2 mt-3 mb-1 font-medium rounded-md">Landing View...</li>
                        <li className={`py-2 pl-3 pr-2 text-sm rounded-md cursor-pointer ${location.pathname.split('/')?.[2] === 'settings' ? 'bg-primary-dark text-white-light' : 'hover:bg-white-muted hover:text-dark-dark'}`} onClick={() => navigation(RouteName.adminSettings)}>
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 12h8" /><path d="M12 15h8" /><path d="M12 9h8" /><path d="M12 4v16" /></svg>
                                </span>
                                <span>Settings</span>
                            </div>
                        </li>
                        {/*  <li className="py-2 pl-3 pr-2 text-sm hover:bg-white-muted rounded-md cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-12.99 3l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm3 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
                                </span>
                                <span>Who We Are</span>
                            </div>
                        </li>
                        <li className="py-2 pl-3 pr-2 text-sm hover:bg-white-muted rounded-md cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-12.99 3l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm3 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
                                </span>
                                <span>Our Impact</span>
                            </div>
                        </li>
                        <li className="py-2 pl-3 pr-2 text-sm hover:bg-white-muted rounded-md cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-12.99 3l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm3 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
                                </span>
                                <span>Business Highlights</span>
                            </div>
                        </li>
                        <li className="py-2 pl-3 pr-2 text-sm hover:bg-white-muted rounded-md cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-12.99 3l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm3 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
                                </span>
                                <span>Sustainability</span>
                            </div>
                        </li>
                        <li className="py-2 pl-3 pr-2 text-sm hover:bg-white-muted rounded-md cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-12.99 3l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm3 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
                                </span>
                                <span>Media</span>
                            </div>
                        </li>
                        <li className="py-2 pl-3 pr-2 text-sm hover:bg-white-muted rounded-md cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-12.99 3l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm3 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
                                </span>
                                <span>Contact</span>
                            </div>
                        </li>
                        <li className="py-2 pl-3 pr-2 text-sm hover:bg-white-muted rounded-md cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-12.99 3l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm3 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
                                </span>
                                <span>Career</span>
                            </div>
                        </li> */}
                        {/* <li className="text-dark-muted py-2 bg-white-muted hover:text-dark-dark text-sm px-2 mt-3 mb-1 font-medium rounded-md">General...</li> */}
                        {/* <li className="py-2 pl-3 pr-2 text-sm hover:bg-white-muted hover:text-dark-dark rounded-md cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 4a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14.133 1.502a1 1 0 0 1 1.365 -.369a9.015 9.015 0 1 1 -10.404 14.622a1 1 0 1 1 1.312 -1.51a7.015 7.015 0 1 0 8.096 -11.378a1 1 0 0 1 -.369 -1.365z" /><path d="M11 16a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4a1 1 0 0 1 1 -1z" /><path d="M15 20a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" /></svg>
                                </span>
                                <span>Language</span>
                            </div>
                        </li> */}
                        {/* <li className="py-2 pl-3 pr-2 text-sm hover:bg-white-muted hover:text-dark-dark rounded-md cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3" /></svg>
                                </span>
                                <span>Privacy Policy</span>
                            </div>
                        </li>
                        <li className="py-2 pl-3 pr-2 text-sm hover:bg-white-muted hover:text-dark-dark rounded-md cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-6.99 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>
                                </span>
                                <span>Term {'&'} Condition</span>
                            </div>
                        </li>
                        <li className="py-2 pl-3 pr-2 text-sm hover:bg-white-muted hover:text-dark-dark rounded-md cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" /></svg>
                                </span>
                                <span>Contact</span>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;