import { Button, Content, DeleteConfirmModal } from "../../components";
import { UseCareerContext } from "../../contexts/career/CareerContext";
import { CreateModal, DetailModal, UpdateModal } from "./component";

const CareerPage = () => {
    const { career, getCareer, deleteCareer } = UseCareerContext();

    return (
        <Content>
            <div className="shadow-all bg-white-light rounded-md px-7 py-5 grow">
                <div className="flex justify-between">
                    <span className="font-bold text-xl">Career</span>
                    <CreateModal onSave={() => getCareer()} />
                </div>
                <div className="mt-5">
                    <table className="w-full border-collapse">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-center w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]">No</th>
                                <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Title</th>
                                <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Location</th>
                                <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Posting Date</th>
                                <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Apply Before</th>
                                <th className="border-y-[1.5px] border-white-muted pl-3 pr-5 text-sm font-semibold text-dark-muted py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {(career?.data ?? [])?.length === 0 && (
                                <tr className="hover:bg-white-muted">
                                    <td colSpan={6} className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-center">
                                        <span className="font-semibold">Data not found</span>
                                    </td>
                                </tr>
                            )}
                            {(career?.data ?? [])?.map((item, index) => {
                                return (
                                    <tr key={index} className="hover:bg-white-muted">
                                        <td className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-center">{index + 1}</td>
                                        <td className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm font-medium text-start">{item.title}</td>
                                        <td className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">{item.location}</td>
                                        <td className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">{item.posting_date}</td>
                                        <td className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">{item.apply_before}</td>
                                        <td className="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">
                                            <div className="flex gap-2 justify-end">
                                                <DetailModal item={item}>
                                                    <Button className="rounded-md text-sm border border-dark-muted bg-transparent py-[6px] pl-[10px] pr-[6px] font-normal">
                                                        <span>Detail</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>
                                                    </Button>
                                                </DetailModal>
                                                <UpdateModal item={item} onSave={() => getCareer()} />
                                                <DeleteConfirmModal onSave={() => deleteCareer({ id: item.id })}>
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

export default CareerPage;