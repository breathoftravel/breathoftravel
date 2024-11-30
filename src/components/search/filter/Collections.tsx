'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Collections() {
    const [isOpen, setIsOpen] = useState(true)
    const [showMore, setShowMore] = useState(false)

    const collections = [
        { name: "Broadway", count: 23 },
        { name: "Water Adventures", count: 120, highlight: true },
        { name: "Adventures", count: 67 },
        { name: "Sport Shows", count: 35 },
        { name: "Road Tours", count: 76 },
        { name: "Mountain & Hills", count: 13 },
        { name: "City Tours", count: 45 },
        { name: "Historical Sites", count: 30 },
        { name: "Museums", count: 25 },
        { name: "Nightlife", count: 50 },
    ]

    return (
      <div className="space-y-4">
          <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Collections</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
          </div>
          {isOpen && (
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                <ul className="space-y-2">
                    {collections.slice(0, showMore ? collections.length : 6).map((collection, index) => (
                      <li key={index} className={`text-sm ${collection.highlight ? "text-primary font-medium" : "text-muted-foreground"}`}>
                          {collection.name} ({collection.count})
                      </li>
                    ))}
                </ul>
                {collections.length > 6 && (
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => setShowMore(!showMore)}
                    className="mt-2 p-0"
                  >
                      {showMore ? "Show less" : `+${collections.length - 6} more`}
                  </Button>
                )}
            </ScrollArea>
          )}
      </div>
    )
}

