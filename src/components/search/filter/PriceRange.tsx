import {ChangeEvent, useState} from "react";

export default function PriceRange() {
    const [minPrice, setMinPrice] = useState(400);
    const [maxPrice, setMaxPrice] = useState(800);

    const handleMinPriceChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.target.value);
        if (value < maxPrice) {
            setMinPrice(value);
        } else {
            setMinPrice(maxPrice - 1);
        }
    };

    const handleMaxPriceChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.target.value);
        if (value > minPrice) {
            setMaxPrice(value);
        } else {
            setMaxPrice(minPrice + 1);
        }
    };

    const priceOptions = Array.from({ length: 20 }, (_, i) => (i + 1) * 100);
    return (
        <div className="p-4">
            <div className="text-lg font-semibold mb-2">Price range</div>
            <div className="flex items-center space-x-2">
                <div className="flex items-center border rounded-full px-2 py-1 bg-white shadow-sm">
                    <i className="fas fa-dollar-sign mr-1"></i>
                    <span className="text-gray-700">Min:</span>
                    <select
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="text-gray-900 font-semibold ml-2 bg-transparent border-none focus:outline-none"
                    >
                        {priceOptions.map(price => (
                            <option key={price} value={price}>{`฿${price}`}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center border rounded-full px-2 py-1 bg-white shadow-sm">
                    <i className="fas fa-dollar-sign mr-1"></i>
                    <span className="text-gray-700">Max:</span>
                    <select
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        className="text-gray-900 font-semibold ml-2 bg-transparent border-none focus:outline-none"
                    >
                        {priceOptions.map(price => (
                            <option key={price} value={price}>{`฿${price}`}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}