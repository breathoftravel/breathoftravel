'use client'

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"

export default function PriceRange() {
    const [priceRange, setPriceRange] = useState([400, 800])

    const handlePriceChange = (newValues: number[]) => {
        setPriceRange(newValues)
    }

    return (
      <div className="space-y-4">
          <h3 className="text-lg font-semibold">Price Range</h3>
          <div className="flex items-center space-x-4">
              <Input
                type="number"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange([parseInt(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <span>to</span>
              <Input
                type="number"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
          </div>
          <Slider
            min={0}
            max={2000}
            step={100}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="w-full"
          />
      </div>
    )
}

