import Image from "next/image";

export default function BackgroundImage() {
  return (
    <section className="flex items-center justify-center bg-cover bg-center sm:min-h-[300px]">
      <Image
        src="/static/image/banner.webp"
        alt="Background image"
        width={1280}
        height={720}
        className="object-cover w-full max-h-[720px]"
      />
    </section>
  )
}