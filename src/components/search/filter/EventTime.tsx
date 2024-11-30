'use client'

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Sun, Moon, Sunset } from "lucide-react"

export default function EventTime() {
    const [isOpen, setIsOpen] = useState(true)
    const [showMore, setShowMore] = useState(false)

    const times = [
        { id: "morning", label: "Morning", icon: Sun, time: "8:00 am to 12:00 pm" },
        { id: "afternoon", label: "Afternoon", icon: Sun, time: "12:00 pm to 4:00 pm" },
        { id: "evening", label: "Evening", icon: Sunset, time: "4:00 pm to 7:00 pm" },
        { id: "night", label: "Night", icon: Moon, time: "7:00 pm onwards" },
    ]

    return (
      <div className="space-y-4">
          <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Event Time</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
          </div>
          {isOpen && (
            <div className="space-y-2">
                {times.slice(0, showMore ? times.length : 3).map((time) => (
                  <div key={time.id} className="flex items-start space-x-2">
                      <Checkbox id={time.id} />
                      <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor={time.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                              <div className="flex items-center space-x-2">
                                  <span>{time.label}</span>
                                  <time.icon className="h-4 w-4 text-muted-foreground" />
                              </div>
                          </label>
                          <p className="text-sm text-muted-foreground">{time.time}</p>
                      </div>
                  </div>
                ))}
                {times.length > 3 && (
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => setShowMore(!showMore)}
                    className="mt-2 p-0"
                  >
                      {showMore ? "Show less" : `+${times.length - 3} more`}
                  </Button>
                )}
            </div>
          )}
      </div>
    )
}

