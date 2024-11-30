'use client'

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Duration() {
    const [isOpen, setIsOpen] = useState(true)
    const [showMore, setShowMore] = useState(false)

    const durations = [
        { id: "less-than-1", label: "Less than 1 hour" },
        { id: "1-2", label: "1 - 2 hours" },
        { id: "2-4", label: "2 - 4 hours" },
        { id: "more-than-4", label: "More than 4 hours" },
    ]

    return (
      <div className="space-y-4">
          <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Duration</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
          </div>
          {isOpen && (
            <div className="space-y-2">
                {durations.slice(0, showMore ? durations.length : 2).map((duration) => (
                  <div key={duration.id} className="flex items-center space-x-2">
                      <Checkbox id={duration.id} />
                      <label
                        htmlFor={duration.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                          {duration.label}
                      </label>
                  </div>
                ))}
                {durations.length > 2 && (
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => setShowMore(!showMore)}
                    className="mt-2 p-0"
                  >
                      {showMore ? "Show less" : `+${durations.length - 2} more`}
                  </Button>
                )}
            </div>
          )}
      </div>
    )
}

