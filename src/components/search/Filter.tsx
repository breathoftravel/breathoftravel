import Collections from "@/components/search/filter/Collections";
import EventTime from "@/components/search/filter/EventTime";
import Duration from "@/components/search/filter/Duration";
import Region from "@/components/search/filter/Region";
import PriceRange from "@/components/search/filter/PriceRange";

export default function Filter() {
  return (
    <div className="card">
      <div className="card-body rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-800 font-bold text-lg">FILTERS</div>
          <div className="text-gray-400 text-sm cursor-pointer">Reset</div>
        </div>
        <hr/>
        <Region />
        <PriceRange />
        <Collections />
        <EventTime />
        <Duration />
      </div>
    </div>
  )
}