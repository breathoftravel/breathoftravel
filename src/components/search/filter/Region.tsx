'use client'

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Region() {
    const [isOpen, setIsOpen] = useState(true)
    const [showMore, setShowMore] = useState(false)

    const regions = [
        { id: "phuket", label: "Phuket" },
        { id: "krabi", label: "Krabi" },
        { id: "pangnga", label: "Phang Nga" },
        { id: "songkhla", label: "Songkhla" },
    ]

    return (
      <div className="space-y-4">
          <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Region</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
          </div>
          {isOpen && (
            <div className="space-y-2">
                {regions.slice(0, showMore ? regions.length : 2).map((region) => (
                  <div key={region.id} className="flex items-center space-x-2">
                      <Checkbox id={region.id} />
                      <label
                        htmlFor={region.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                          {region.label}
                      </label>
                  </div>
                ))}
                {regions.length > 2 && (
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => setShowMore(!showMore)}
                    className="mt-2 p-0"
                  >
                      {showMore ? "Show less" : `+${regions.length - 2} more`}
                  </Button>
                )}
            </div>
          )}
      </div>
    )
}

