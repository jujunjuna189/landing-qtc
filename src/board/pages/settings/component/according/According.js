import React, { useState } from 'react';

const Accordion = () => {
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
                        onClick={() => toggleAccordion(0)}
                    >
                        <div className='grow'>
                            <h3 className="font-semibold">Accordion Item 1</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 0 ? 'max-h-96' : 'max-h-0'
                            }`}
                    >
                        {openIndex === 0 && (
                            <div className="p-4 bg-gray-50">
                                <p>This is the content for the first accordion item.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="bg-white border border-gray-dark rounded-md">
                    <div
                        className="cursor-pointer p-4 hover:bg-white-muted rounded-t-md flex"
                        onClick={() => toggleAccordion(1)}
                    >
                        <div className='grow'>
                            <h3 className="font-semibold">Accordion Item 2</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 1 ? 'max-h-96' : 'max-h-0'
                            }`}
                    >
                        {openIndex === 1 && (
                            <div className="p-4 bg-gray-50">
                                <p>This is the content for the second accordion item.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="bg-white border border-gray-dark rounded-md">
                    <div
                        className="cursor-pointer p-4 hover:bg-white-muted rounded-t-md flex"
                        onClick={() => toggleAccordion(2)}
                    >
                        <div className='grow'>
                            <h3 className="font-semibold">Accordion Item 3</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 2 ? 'max-h-96' : 'max-h-0'
                            }`}
                    >
                        {openIndex === 2 && (
                            <div className="p-4 bg-gray-50">
                                <p>This is the content for the third accordion item.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
