import { Content, DeleteConfirmModal } from "../../components/molecules";
import { Button } from "../../components/atoms";
import { CreateModal, UpdateModal } from "./component";
import { UseBusinessContext } from "../../contexts/business/BusinessContext";

const BusinessPage = () => {
    const { business, getBusiness, deleteBusiness } = UseBusinessContext();

    return (
        <Content>
            <div className="shadow-all bg-white-light rounded-md px-7 py-5 grow">
                <div className="flex justify-between">
                    <span className="font-bold text-xl">Business</span>
                    <CreateModal onSave={() => getBusiness()} />
                </div>
                <div className="mt-5">
                    <table className="w-full border-collapse">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-center w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]">No</th>
                                <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start w-[5rem] min-w-[5rem] max-w-[5rem]">Logo</th>
                                <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Name</th>
                                <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Redirect</th>
                                <th className="border-y-[1.5px] border-white-muted pl-3 pr-5 text-sm font-semibold text-dark-muted py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {(business?.data ?? [])?.length === 0 && (
                                <tr className="hover:bg-white-muted">
                                    <td colSpan={5} className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-center">
                                        <span className="font-semibold">Data not found</span>
                                    </td>
                                </tr>
                            )}
                            {(business?.data ?? [])?.map((item, index) => {
                                return (
                                    <tr key={index} className="hover:bg-white-muted">
                                        <td className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-center">{index + 1}</td>
                                        <td className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">
                                            <div className="w-14 min-w-14 max-w-14 rounded-md">
                                                <img src={item.logo} alt="Logo" />
                                            </div>
                                        </td>
                                        <td className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm font-medium text-start">{item.name}</td>
                                        <td className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">{item.redirect}</td>
                                        <td className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">
                                            <div className="flex gap-2 justify-end">
                                                <UpdateModal item={item} onSave={() => getBusiness()} />
                                                <DeleteConfirmModal onSave={() => deleteBusiness({ id: item.id })}>
                                                    <Button className="rounded-md text-sm border border-dark-muted bg-transparent py-[6px] pl-[10px] pr-[6px] font-normal">
                                                        <span>Delete</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /></svg>
                                                    </Button>
                                                </DeleteConfirmModal>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Content>
    );
}

export default BusinessPage;