import Breadcrumbs from "@/components/breadcrumb/page";
import ContactIndex from "@/components/products/Contact/page";
import {
  ClockIcon, PhotoIcon, ScaleIcon, TicketIcon, TrophyIcon, TruckIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";
import {Metadata, ResolvingMetadata} from "next";
import {apiGet} from "@/utils/api";
import {TPackage, TProduct} from "@/interface/product";

type Props = {
  params: Promise<{ productId: string }>
}

export async function generateMetadata({params}: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const productId = (await params).productId

  const product: TProduct = await apiGet(`/product/${productId}`);
  const previousImages = (await parent).openGraph?.images || [];
  const images =
    product.productImage?.map((image) => ({url: `product/${image.productId}/${image.name}.webp`})) || [];
  return {
    title: `${product.nameEn} | Breath of Travel`,
    description: `Discover the unique experience of ${product.nameEn}`,
    keywords: ["travel", "tour", "holiday", product.nameEn, "exploration"],
    openGraph: {
      type: "website",
      url: "https://breathoftravels.com/product/${product.id}",
      title: `${product.nameEn} | Breath of Travel`,
      description: `Discover the unique experience of ${product.nameEn}`,
      siteName: "Breath of Travel",
      images: [
        ...images,
        ...previousImages,
      ],
    },
  };
}

interface IDisplayImage {
  src: string;
  alt: string;
}

export default async function Page({params}: Props) {
  const productId = (await params).productId

  const product: TProduct = await apiGet(`/product/${productId}`);

  if (!product) {
    return (
      <div className="container mx-auto text-center py-16">
        <h1 className="text-2xl font-bold text-gray-800">Product Not Found</h1>
        <p className="text-gray-600">We couldn’t find the product you’re looking for.</p>
      </div>
    );
  }

  const pricesJsonLd = product?.package?.map((price: TPackage) => ({
    "@type": "Product",
    image: product.productImage?.[0] || "https://breathoftravels.com/static/image/category.webp",
    url: `https://breathoftravels.com/product/${product.id}`,
    name: product.nameEn,
    offers: {
      "@type": "Offer",
      priceCurrency: "THB",
      price: price.saleAdultPrice.toFixed(2),
    },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    url: `https://breathoftravels.com/product/${product.id}`,
    numberOfItems: product?.package?.length || 0,
    itemListElement: pricesJsonLd,
  };

  const images: IDisplayImage[] =
    product.productImage?.map((image) => ({
      src: `product/${image.productId}/${image.name}.webp`,
      alt: product.nameEn
    })) || [];
  const displayImages = images.slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <Breadcrumbs/>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-16 py-10">
        <div className="grid grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="col-span-12 md:col-span-8 xl:col-span-9 space-y-6">
            <ImageGallery images={displayImages}/>
            <ProductIcons/>
            <Section title="Description">
              <p className="indent-8">{product.descriptionEn}</p>
            </Section>
            {/*<Section title="What is Included">*/}
            {/*    <FeatureList features={product.featuresIncluded} icon={<CheckIcon className="w-4 h-4 text-green-600" />} />*/}
            {/*</Section>*/}
            {/*<Section title="What is Excluded">*/}
            {/*    <FeatureList features={product.featuresExcluded} icon={<XMarkIcon className="w-4 h-4 text-red-600" />} />*/}
            {/*</Section>*/}
            <Section title="Itinerary">
              <ul className="list-disc pl-8 space-y-2 text-gray-700">
                {product.productItinerary?.map((step, index) => (
                  <li key={index}>{step.titleEn} : {step.subTitleEn}</li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="col-span-12 md:col-span-4 xl:col-span-3">
            <ContactIndex message={product?.nameEn}/>
          </div>
        </div>

        {/* Similar Experiences */}
        {/*<Section title="Similar Experiences">*/}
        {/*    <Carousel images={product.similarExperiences} />*/}
        {/*</Section>*/}

        {/*/!* More to Explore *!/*/}
        {/*<Section title="More to Explore in Phuket">*/}
        {/*    <Carousel images={product.moreToExplore} />*/}
        {/*</Section>*/}
      </div>
    </>
  );
}

const ImageGallery = ({images}: { images: IDisplayImage[] }) => (
  <div className="grid grid-rows-2 grid-flow-col gap-4">
    {images.map((image, index) => (
      <div key={index} className={index === 0 ? "row-span-2 col-span-2" : ""}>
        <Image
          src={image.src}
          alt={image.alt}
          width={index === 0 ? 940 : 470}
          height={index === 0 ? 788 : 394}
          priority={index === 0}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    ))}
  </div>
);

const ProductIcons = () => (
  <div className="flex justify-between text-center py-4">
    {[PhotoIcon, ScaleIcon, TrophyIcon, TicketIcon, TruckIcon, ClockIcon].map((Icon, index) => (
      <div key={index} className="text-gray-600">
        <Icon className="w-8 h-8 mx-auto text-blue-500"/>
        <span className="text-sm">Feature {index + 1}</span>
      </div>
    ))}
  </div>
);

const Section = ({title, children}: { title: string; children: React.ReactNode }) => (
  <div className="py-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
    {children}
  </div>
);
//
// const FeatureList = ({ features, icon }: { features: string[]; icon: React.ReactNode }) => (
//   <ul className="list-none space-y-2">
//       {features.map((feature, index) => (
//         <li key={index} className="flex items-center">
//             {icon}
//             <span className="ml-2 text-gray-700">{feature}</span>
//         </li>
//       ))}
//   </ul>
// );
//
// const Carousel = ({ images }: { images: IDisplayImage[] }) => (
//   <div className="flex space-x-4 overflow-x-auto py-4">
//       {images.map((image, index) => (
//         <div key={index} className="flex-shrink-0">
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={200}
//               height={200}
//               className="rounded-lg shadow-md object-cover"
//             />
//         </div>
//       ))}
//   </div>
// );
