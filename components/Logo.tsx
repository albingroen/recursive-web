import { ICON_BLUR_PLACEHOLDER } from "@/lib/constants";
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="h-64 w-64 rounded-xl object-center object-cover shadow-xl shadow-gray-400/80 dark:shadow-gray-900/50"
      blurDataURL={ICON_BLUR_PLACEHOLDER}
      alt="Recursive logo"
      placeholder="blur"
      src="/icon.png"
      height={500}
      width={500}
    />
  );
}
