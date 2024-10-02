import {BookOpenIcon, StarIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {TProduct} from "@/app/search/[[...slug]]/page";
import {randomHalfNumber, randomNumber} from "@/utils/number";
import {formatCurrency} from "@/utils/currency";
import Link from "next/link";

export default function GridCard({product}:{product:TProduct}) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="w-full">
        <Image src={`https://breathoftravel.vercel.app/static/image/product.webp`}
               loading={`lazy`}
               width={390}
               height={293}
               alt={product.name}/>
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h3 className="card-title">
            {product.name}
            <div className="badge badge-secondary">NEW</div>
          </h3>
          <div className="badge badge-outline">{randomHalfNumber()}
            <StarIcon width={16} height={16} className={`ml-1 text-orange-400`}/> ({randomNumber(40)})
          </div>
        </div>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.type}</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="flex justify-end items-center">
          {formatCurrency(product.prices?.shift()?.adult || 0)}
          <Link ref={`nofollow`} className="ml-2 btn btn-square btn-sm btn-error btn-outline" href={`/product/${product.id}`}
             target={`_blank`}>
            <BookOpenIcon width={18} height={18} className={`hover:text-white`}/>
          </Link>
        </div>
      </div>
    </div>
  )
}