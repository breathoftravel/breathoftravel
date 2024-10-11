'use client';
import {useState} from "react";
import {ChevronDoubleDownIcon, ChevronDoubleUpIcon} from "@heroicons/react/24/solid";

export default function EventTime() {
    const [isOpen, setIsOpen] = useState(true);
    const [showMore, setShowMore] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-2 cursor-pointer"
                 onClick={toggleOpen}>
                <h2 className="text-lg font-semibold">Event Time</h2>
                {isOpen ? <ChevronDoubleDownIcon height={16} width={16} className={`ml-2`}/> :
                    <ChevronDoubleUpIcon height={16} width={16} className={`ml-2`}/>}
            </div>
            {isOpen && (
                <div className="space-y-2">
                    <div className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2"/>
                        <div>
                            <div className="flex items-center">
                                <span>Morning</span>
                                <i className="fas fa-sun ml-2 text-gray-400"></i>
                            </div>
                            <p className="text-sm text-gray-400">8:00 am to 12:00 pm</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2"/>
                        <div>
                            <div className="flex items-center">
                                <span>Afternoon</span>
                                <i className="fas fa-sun ml-2 text-gray-400"></i>
                            </div>
                            <p className="text-sm text-gray-400">12:00 am to 4:00 pm</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2"/>
                        <div>
                            <div className="flex items-center">
                                <span>Evening</span>
                                <i className="fas fa-cloud-sun ml-2 text-gray-400"></i>
                            </div>
                            <p className="text-sm text-gray-400">4:00 pm to 7:00 pm</p>
                        </div>
                    </div>
                    {!showMore && (
                        <div className="cursor-pointer" onClick={toggleShowMore}>+5 more</div>
                    )}
                    {showMore && (
                        <>
                            <div className="flex items-start">
                                <input type="checkbox" className="mt-1 mr-2"/>
                                <div>
                                    <div className="flex items-center">
                                        <span>Night</span>
                                        <i className="fas fa-moon ml-2 text-gray-400"></i>
                                    </div>
                                    <p className="text-sm text-gray-400">7:00 pm onwards</p>
                                </div>
                            </div>
                            <div className="cursor-pointer" onClick={toggleShowMore}>Show less</div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}