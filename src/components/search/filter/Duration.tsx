'use client';
import {useState} from "react";
import {ChevronDoubleDownIcon, ChevronDoubleUpIcon} from "@heroicons/react/24/solid";

export default function Duration() {
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
                <h2 className="text-lg font-semibold">Duration</h2>
                {isOpen ? <ChevronDoubleDownIcon height={16} width={16} className={`ml-2`}/> :
                    <ChevronDoubleUpIcon height={16} width={16} className={`ml-2`}/>}
            </div>
            {isOpen && (
                <div className="space-y-2">
                    <div className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2"/>
                        <span>less than 1 hour</span>
                    </div>
                    <div className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2"/>
                        <span>1 - 2 hours</span>
                    </div>
                    {!showMore && (
                        <div className="cursor-pointer" onClick={toggleShowMore}>+1 more</div>
                    )}
                    {showMore && (
                        <>
                            <div className="flex items-start">
                                <input type="checkbox" className="mt-1 mr-2"/>
                                <span>2 - 4 hours</span>
                            </div>
                            <div className="flex items-start">
                                <input type="checkbox" className="mt-1 mr-2"/>
                                <span>more than 4 hours</span>
                            </div>
                            <div className="cursor-pointer" onClick={toggleShowMore}>Show less</div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}