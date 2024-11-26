import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const islands = [
  {
    name: "Similan Islands",
    price: "1000",
    image: "/static/images/similan.jpg"
  },
  {
    name: "Phi Phi Islands",
    price: "1000",
    image: "/static/images/phiphi.jpg"
  },
  {
    name: "Lipe Islands",
    price: "1000",
    image: "/static/images/lipe.jpg"
  },
  {
    name: "Ta Chai Islands",
    price: "1000",
    image: "/static/images/tachai.jpg"
  }
]

export default function IslandsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Islands in Thailand.</h1>
        <p className="text-gray-600">Thailand Island Guide: The Most Beautiful Islands.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {islands.map((island) => (
          <Card key={island.name} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-[3/4]">
                <Image
                  src={island.image}
                  alt={island.name}
                  width={320} height={480}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{island.name}</h3>
                <p className="text-gray-600">{island.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="secondary" className="bg-[#F39B7E] text-white hover:bg-[#e88b6e]">
          View All
        </Button>
      </div>
    </div>
  )
}