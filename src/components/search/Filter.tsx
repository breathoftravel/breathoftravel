import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Collections from "@/components/search/filter/Collections"
import EventTime from "@/components/search/filter/EventTime"
import Duration from "@/components/search/filter/Duration"
import Region from "@/components/search/filter/Region"
import PriceRange from "@/components/search/filter/PriceRange"

export default function Filter() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Filters</CardTitle>
        <Button variant="ghost" size="sm">
          Reset
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <Region />
        <Separator />
        <PriceRange />
        <Separator />
        <Collections />
        <Separator />
        <EventTime />
        <Separator />
        <Duration />
      </CardContent>
    </Card>
  )
}

