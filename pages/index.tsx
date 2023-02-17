import Seo, { DESCRIPTION, TITLE } from "@/components/Seo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Seo />

      <div className="max-w-screen-lg h-screen mx-auto px-8 pt-24 flex flex-col md:justify-center gap-14 pb-24 md:pb-80">
        <Image
          alt="Recursive logo"
          src="/favicon.png"
          width={500}
          height={500}
          className="h-48 w-48 rounded-xl"
        />
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-bold tracking-tight">
            {TITLE}{" "}
            <span className="text-neutral-400 italic font-medium">
              (Coming soon)
            </span>
          </h1>
          <p className="leading-relaxed text-xl">{DESCRIPTION}</p>
        </div>
      </div>
    </>
  );
}
