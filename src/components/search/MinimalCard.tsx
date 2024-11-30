import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Eye } from "lucide-react";

import { TImage, TPackage } from "@/interface/product";
import { formatCurrency } from "@/utils/currency";

export default function MinimalCard({ data, index }: { data: TPackage, index: number }) {
  console.log(data?.product?.productImage);
  const images = data.product?.productImage?.map((image: TImage) => {
    return `${process.env.NEXT_PUBLIC_RS_CDN_URL}/product/${image.productId}/${image.name}.webp`;
  });

  const mainImage = images && images.length > 0 ? images[0] : "https://breathoftravels.com/static/image/category.webp";

  return (
    <Link href={`/product/${data.productId}`} className="group">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={mainImage}
            alt={data.titleEn || ""}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={index < 3}
            loading={index < 3 ? "eager" : "lazy"}
          />
          <Badge className="absolute top-2 left-2 bg-blue-500 text-white">New</Badge>
        </div>
        <CardContent className="p-4">
          <div className="text-sm text-muted-foreground mb-2">Phuket</div>
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{data.product?.nameEn || data.product?.nameTh || ""}</h3>
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{data.titleEn || data.titleEn || ""}</h3>
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">4.5</span>
            <span className="text-sm text-muted-foreground ml-2">(Coming soon)</span>
          </div>
          <div className="flex items-baseline justify-between mt-2">
            {data?.promotionAdultPrice ? (
              <>
                <span className="text-sm text-muted-foreground line-through">
                  {formatCurrency(data?.saleAdultPrice || 0)}
                </span>
                <span className="text-lg font-bold text-primary">
                  {formatCurrency(data?.promotionAdultPrice || 0)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-primary">
                {formatCurrency(data?.saleAdultPrice || 0)}
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="px-4 py-3 bg-muted/50 flex justify-between items-center">
          <div className="flex items-center text-sm text-muted-foreground">
            <Eye className="w-4 h-4 mr-1" />
            <span>56</span>
          </div>
          <div className="flex space-x-2">
            {data.product?.type && (
              <Badge variant="outline" className="text-xs">
                {data.product?.type.toUpperCase()}
              </Badge>
            )}
            <Badge variant="outline" className="text-xs">PACKAGE</Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
