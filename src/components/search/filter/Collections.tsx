'use client';
import {useState} from "react";
import {ChevronDoubleDownIcon, ChevronDoubleUpIcon} from "@heroicons/react/24/solid";

export default function Collections() {
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
                <h2 className="text-lg font-semibold">Collections</h2>
                {isOpen ? <ChevronDoubleDownIcon height={16} width={16} className={`ml-2`}/> :
                    <ChevronDoubleUpIcon height={16} width={16} className={`ml-2`}/>}
            </div>
            {isOpen && (
                <ul className="space-y-2">
                    <li className="text-gray-800">Broadway (23)</li>
                    <li className="text-red-500">Water Adventures (120)</li>
                    <li className="text-gray-800">Adventures (67)</li>
                    <li className="text-gray-800">Sport Shows (35)</li>
                    <li className="text-gray-800">Road Tours (76)</li>
                    <li className="text-gray-800">Mountain & Hills (13)</li>
                    {!showMore && (
                        <li className="text-gray-800 cursor-pointer" onClick={toggleShowMore}>+23 more</li>
                    )}
                    {showMore && (
                        <>
                            <li className="text-gray-800">City Tours (45)</li>
                            <li className="text-gray-800">Historical Sites (30)</li>
                            <li className="text-gray-800">Museums (25)</li>
                            <li className="text-gray-800">Nightlife (50)</li>
                            <li className="text-gray-800">Parks (40)</li>
                            <li className="text-gray-800">Shopping (60)</li>
                            <li className="text-gray-800">Theater (20)</li>
                            <li className="text-gray-800">Wildlife (15)</li>
                            <li className="text-gray-800">Zoos (10)</li>
                            <li className="text-gray-800">Beaches (35)</li>
                            <li className="text-gray-800">Cultural Events (22)</li>
                            <li className="text-gray-800">Festivals (18)</li>
                            <li className="text-gray-800">Food Tours (27)</li>
                            <li className="text-gray-800">Gardens (12)</li>
                            <li className="text-gray-800">Hiking (19)</li>
                            <li className="text-gray-800">Photography (14)</li>
                            <li className="text-gray-800">Religious Sites (11)</li>
                            <li className="text-gray-800">Scenic Drives (16)</li>
                            <li className="text-gray-800">Skiing (8)</li>
                            <li className="text-gray-800">Snorkeling (9)</li>
                            <li className="text-gray-800">Theme Parks (21)</li>
                            <li className="text-gray-800">Wine Tours (13)</li>
                            <li className="text-gray-800 cursor-pointer" onClick={toggleShowMore}>Show less</li>
                        </>
                    )}
                </ul>
            )}
        </div>
    );
}