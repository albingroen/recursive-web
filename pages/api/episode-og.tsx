/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextApiRequest } from "next";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../assets/Inter-Medium.otf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextApiRequest) {
  const fontData = await font;

  const { searchParams } = new URL(req.url!);

  const hasTitle = searchParams.has("title");

  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "Recursive episode";

  return new ImageResponse(
    (
      <div tw="flex flex-col items-center justify-center w-full h-full text-center bg-neutral-900 font-sans px-20">
        <img
          alt=""
          src="https://res.cloudinary.com/albin-groen/image/upload/f_auto,q_auto/v1677103859/icon_cgsvid.png"
          tw="rounded-[32px] w-80"
        />

        <h1 tw="text-8xl mt-16 text-white leading-snug">{title}</h1>
      </div>
    ),
    {
      width: 1800,
      height: 900,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
