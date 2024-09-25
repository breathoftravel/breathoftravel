import {BookOpenIcon, StarIcon} from "@heroicons/react/24/solid";
import Image from "next/image";

export default function GridCard() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="w-full">
        <Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
               loading={`lazy`}
               width={390}
               height={220}
               alt="Shoes"/>
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h3 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h3>
          <div className="badge badge-outline">4 <StarIcon width={16} height={16}
                                                           className={`ml-1 text-orange-400`}/> (16)
          </div>
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="flex justify-end items-center">
          1,200.00 ฿
          <a className="ml-2 btn btn-square btn-sm btn-error btn-outline" href={`/product/similan-tour-one-day`}
             target={`_blank`}>
            <BookOpenIcon width={18} height={18} className={`hover:text-white`}/>
          </a>
        </div>
      </div>
    </div>
  )
}