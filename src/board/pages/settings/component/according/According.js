import React, { useState } from 'react';
import { UseSettingsContext } from '../../../../contexts/settings/SettingsContext';
import UpdateModal from '../modal/UpdateModal';
import { LinkChecker } from '../../../../helpers';

const Accordion = () => {
    const {assets, onGetAssets} = UseSettingsContext();
    const [openIndex, setOpenIndex] = useState(null); // State untuk melacak item yang terbuka

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle item yang dipilih
    };

    return (
        <div className="w-full mt-10">
            <div className="space-y-2">
                {/* Accordion Item 1 */}
                <div className="bg-white border border-gray-dark rounded-md">
                    <div
                        className="cursor-pointer p-4 hover:bg-white-muted rounded-t-md flex"
                        onClick={() => {toggleAccordion(0); onGetAssets({filter: {'page': 'main'}})}}
                    >
                        <div className='grow'>
                            <h3 className="font-semibold">Main Page</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 0 ? 'max-h-96 overflow-y-auto' : 'max-h-0'
                            }`}
                    >
                        {openIndex === 0 && (
                            <div className="p-4 bg-gray-50">
                                <table className="w-full border-collapse">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-center w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]">No</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Asset</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">type</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">page</th>
                                            <th className="border-y-[1.5px] border-white-muted pl-3 pr-5 text-sm font-semibold text-dark-muted py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assets.main?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{index + 1}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        {LinkChecker.getFileType(item.file) === 'image' && (
                                                            <div className='w-20 h-20'>
                                                                <img src={item.file} alt="ImageProfile" className="object-cover w-full h-full" />
                                                            </div>
                                                        )}
                                                        {LinkChecker.getFileType(item.file) === 'video' && (
                                                            <div className='w-20 h-20'>
                                                                <video
                                                                    src={item.file}
                                                                    className="object-cover w-full h-full"
                                                                    controls
                                                                />
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.type}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.page}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        <div className='flex gap-2 items-center justify-end'>
                                                            <UpdateModal item={item} onSave={() => onGetAssets({filter: {'page': 'main'}})}/>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="bg-white border border-gray-dark rounded-md">
                    <div
                        className="cursor-pointer p-4 hover:bg-white-muted rounded-t-md flex"
                        onClick={() => {toggleAccordion(1); onGetAssets({filter: {'page': 'about'}})}}
                    >
                        <div className='grow'>
                            <h3 className="font-semibold">Who We Are</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 1 ? 'max-h-96 overflow-y-auto' : 'max-h-0'
                            }`}
                    >
                        {openIndex === 1 && (
                            <div className="p-4 bg-gray-50">
                                <table className="w-full border-collapse">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-center w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]">No</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Asset</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">type</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">page</th>
                                            <th className="border-y-[1.5px] border-white-muted pl-3 pr-5 text-sm font-semibold text-dark-muted py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assets.about?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{index + 1}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        {LinkChecker.getFileType(item.file) === 'image' && (
                                                            <div className='w-20 h-20'>
                                                                <img src={item.file} alt="ImageProfile" className="object-cover w-full h-full" />
                                                            </div>
                                                        )}
                                                        {LinkChecker.getFileType(item.file) === 'video' && (
                                                            <div className='w-20 h-20'>
                                                                <video
                                                                    src={item.file}
                                                                    className="object-cover w-full h-full"
                                                                    controls
                                                                />
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.type}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.page}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        <div className='flex gap-2 items-center justify-end'>
                                                            <UpdateModal item={item} onSave={() => onGetAssets({filter: {'page': 'about'}})}/>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="bg-white border border-gray-dark rounded-md">
                    <div
                        className="cursor-pointer p-4 hover:bg-white-muted rounded-t-md flex"
                        onClick={() => {toggleAccordion(2); onGetAssets({filter: {'page': 'our-impact'}})}}
                    >
                        <div className='grow'>
                            <h3 className="font-semibold">Our Impact</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 2 ? 'max-h-96 overflow-y-auto' : 'max-h-0'
                            }`}
                    >
                        {openIndex === 2 && (
                            <div className="p-4 bg-gray-50">
                                <table className="w-full border-collapse">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-center w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]">No</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Asset</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">type</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">page</th>
                                            <th className="border-y-[1.5px] border-white-muted pl-3 pr-5 text-sm font-semibold text-dark-muted py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assets['our-impact']?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{index + 1}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        {LinkChecker.getFileType(item.file) === 'image' && (
                                                            <div className='w-20 h-20'>
                                                                <img src={item.file} alt="ImageProfile" className="object-cover w-full h-full" />
                                                            </div>
                                                        )}
                                                        {LinkChecker.getFileType(item.file) === 'video' && (
                                                            <div className='w-20 h-20'>
                                                                <video
                                                                    src={item.file}
                                                                    className="object-cover w-full h-full"
                                                                    controls
                                                                />
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.type}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.page}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        <div className='flex gap-2 items-center justify-end'>
                                                            <UpdateModal item={item} onSave={() => onGetAssets({filter: {'page': 'our-impact'}})}/>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                {/* Accordion Item 4 */}
                <div className="bg-white border border-gray-dark rounded-md">
                    <div
                        className="cursor-pointer p-4 hover:bg-white-muted rounded-t-md flex"
                        onClick={() => {toggleAccordion(3); onGetAssets({filter: {'page': 'business-hightlights'}})}}
                    >
                        <div className='grow'>
                            <h3 className="font-semibold">Business Hightlights</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 3 ? 'max-h-96 overflow-y-auto' : 'max-h-0'
                            }`}
                    >
                        {openIndex === 3 && (
                            <div className="p-4 bg-gray-50">
                                <table className="w-full border-collapse">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-center w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]">No</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Asset</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">type</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">page</th>
                                            <th className="border-y-[1.5px] border-white-muted pl-3 pr-5 text-sm font-semibold text-dark-muted py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assets['business-hightlights']?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{index + 1}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        {LinkChecker.getFileType(item.file) === 'image' && (
                                                            <div className='w-20 h-20'>
                                                                <img src={item.file} alt="ImageProfile" className="object-cover w-full h-full" />
                                                            </div>
                                                        )}
                                                        {LinkChecker.getFileType(item.file) === 'video' && (
                                                            <div className='w-20 h-20'>
                                                                <video
                                                                    src={item.file}
                                                                    className="object-cover w-full h-full"
                                                                    controls
                                                                />
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.type}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.page}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        <div className='flex gap-2 items-center justify-end'>
                                                            <UpdateModal item={item} onSave={() => onGetAssets({filter: {'page': 'business-hightlights'}})}/>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                {/* Accordion Item 5 */}
                <div className="bg-white border border-gray-dark rounded-md">
                    <div
                        className="cursor-pointer p-4 hover:bg-white-muted rounded-t-md flex"
                        onClick={() => {toggleAccordion(4); onGetAssets({filter: {'page': 'sustainability'}})}}
                    >
                        <div className='grow'>
                            <h3 className="font-semibold">Sustainability</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 4 ? 'max-h-96 overflow-y-auto' : 'max-h-0'
                            }`}
                    >
                        {openIndex === 4 && (
                            <div className="p-4 bg-gray-50">
                                <table className="w-full border-collapse">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-center w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]">No</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Asset</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">type</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">page</th>
                                            <th className="border-y-[1.5px] border-white-muted pl-3 pr-5 text-sm font-semibold text-dark-muted py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assets['sustainability']?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{index + 1}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        {LinkChecker.getFileType(item.file) === 'image' && (
                                                            <div className='w-20 h-20'>
                                                                <img src={item.file} alt="ImageProfile" className="object-cover w-full h-full" />
                                                            </div>
                                                        )}
                                                        {LinkChecker.getFileType(item.file) === 'video' && (
                                                            <div className='w-20 h-20'>
                                                                <video
                                                                    src={item.file}
                                                                    className="object-cover w-full h-full"
                                                                    controls
                                                                />
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.type}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.page}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        <div className='flex gap-2 items-center justify-end'>
                                                            <UpdateModal item={item} onSave={() => onGetAssets({filter: {'page': 'sustainability'}})}/>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                {/* Accordion Item 6 */}
                <div className="bg-white border border-gray-dark rounded-md">
                    <div
                        className="cursor-pointer p-4 hover:bg-white-muted rounded-t-md flex"
                        onClick={() => {toggleAccordion(5); onGetAssets({filter: {'page': 'media'}})}}
                    >
                        <div className='grow'>
                            <h3 className="font-semibold">Media</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 5 ? 'max-h-96 overflow-y-auto' : 'max-h-0'
                            }`}
                    >
                        {openIndex === 5 && (
                            <div className="p-4 bg-gray-50">
                                <table className="w-full border-collapse">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-center w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]">No</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Asset</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">type</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">page</th>
                                            <th className="border-y-[1.5px] border-white-muted pl-3 pr-5 text-sm font-semibold text-dark-muted py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assets.media?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{index + 1}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        {LinkChecker.getFileType(item.file) === 'image' && (
                                                            <div className='w-20 h-20'>
                                                                <img src={item.file} alt="ImageProfile" className="object-cover w-full h-full" />
                                                            </div>
                                                        )}
                                                        {LinkChecker.getFileType(item.file) === 'video' && (
                                                            <div className='w-20 h-20'>
                                                                <video
                                                                    src={item.file}
                                                                    className="object-cover w-full h-full"
                                                                    controls
                                                                />
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.type}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.page}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        <div className='flex gap-2 items-center justify-end'>
                                                            <UpdateModal item={item} onSave={() => onGetAssets({filter: {'page': 'media'}})}/>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                {/* Accordion Item 7 */}
                <div className="bg-white border border-gray-dark rounded-md">
                    <div
                        className="cursor-pointer p-4 hover:bg-white-muted rounded-t-md flex"
                        onClick={() => {toggleAccordion(6); onGetAssets({filter: {'page': 'contact'}})}}
                    >
                        <div className='grow'>
                            <h3 className="font-semibold">Contact</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 6 ? 'max-h-96 overflow-y-auto' : 'max-h-0'
                            }`}
                    >
                        {openIndex === 6 && (
                            <div className="p-4 bg-gray-50">
                                <table className="w-full border-collapse">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-center w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]">No</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Asset</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">type</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">page</th>
                                            <th className="border-y-[1.5px] border-white-muted pl-3 pr-5 text-sm font-semibold text-dark-muted py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assets.contact?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{index + 1}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        {LinkChecker.getFileType(item.file) === 'image' && (
                                                            <div className='w-20 h-20'>
                                                                <img src={item.file} alt="ImageProfile" className="object-cover w-full h-full" />
                                                            </div>
                                                        )}
                                                        {LinkChecker.getFileType(item.file) === 'video' && (
                                                            <div className='w-20 h-20'>
                                                                <video
                                                                    src={item.file}
                                                                    className="object-cover w-full h-full"
                                                                    controls
                                                                />
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.type}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.page}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        <div className='flex gap-2 items-center justify-end'>
                                                            <UpdateModal item={item} onSave={() => onGetAssets({filter: {'page': 'contact'}})}/>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                {/* Accordion Item 8 */}
                {/* <div className="bg-white border border-gray-dark rounded-md">
                    <div
                        className="cursor-pointer p-4 hover:bg-white-muted rounded-t-md flex"
                        onClick={() => {toggleAccordion(7); onGetAssets({filter: {'page': 'career'}})}}
                    >
                        <div className='grow'>
                            <h3 className="font-semibold">Career</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 7 ? 'max-h-96 overflow-y-auto' : 'max-h-0'
                            }`}
                    >
                        {openIndex === 7 && (
                            <div className="p-4 bg-gray-50">
                                <table className="w-full border-collapse">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-center w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]">No</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Asset</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">type</th>
                                            <th className="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">page</th>
                                            <th className="border-y-[1.5px] border-white-muted pl-3 pr-5 text-sm font-semibold text-dark-muted py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assets.career?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{index + 1}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        {LinkChecker.getFileType(item.file) === 'image' && (
                                                            <div className='w-20 h-20'>
                                                                <img src={item.file} alt="ImageProfile" className="object-cover w-full h-full" />
                                                            </div>
                                                        )}
                                                        {LinkChecker.getFileType(item.file) === 'video' && (
                                                            <div className='w-20 h-20'>
                                                                <video
                                                                    src={item.file}
                                                                    className="object-cover w-full h-full"
                                                                    controls
                                                                />
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.type}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>{item.page}</td>
                                                    <td className='border-y-[1.5px] border-white-muted px-3 py-3 text-sm'>
                                                        <div className='flex gap-2 items-center justify-end'>
                                                            <UpdateModal item={item} onSave={() => onGetAssets({filter: {'page': 'career'}})}/>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Accordion;
