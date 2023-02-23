import ArrowRight from "./ArrowRight";
import Image from "next/image";
import Stack from "./Stack";
import classNames from "@/lib/classNames";

const LINKS = [
  {
    url: "https://podcasts.apple.com/se/podcast/recursive/id1673088294?l=en",
    image: "/apple-podcast.png",
    label: "Apple Podcasts",
  },
  {
    url: "https://overcast.fm/itunes1673088294/recursive",
    image: "/overcast.png",
    label: "Follow on Overcast",
  },
  {
    url: "https://open.spotify.com/show/5DUToEJVyyxSLxUBTXqqB6",
    image: "/spotify.png",
    label: "Listen on Spotify",
  },
  {
    url: "https://overcast.fm/itunes1673088294/recursive",
    image: "/overcast.png",
    label: "Follow on Overcast",
  },
  {
    url: "https://github.com/albingroen/recursive-web/issues/new",
    image: "/github.png",
    label: "Submit a question",
    iconClassName: "dark:filter dark:invert",
  },
];

export default function Links() {
  return (
    <Stack direction="vertical" className="w-full">
      <p className="text-lg font-semibold">Links</p>

      <ul className="w-full space-y-1.5">
        {LINKS.map((LINK) => (
          <li key={LINK.label}>
            <a
              href={LINK.url}
              className="block rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition p-2 -mx-2 group"
            >
              <Stack align="center" justify="between">
                <Stack align="center">
                  <Image
                    alt=""
                    src={LINK.image}
                    width={50}
                    height={50}
                    className={classNames(
                      "w-8 h-8 drop-shadow-md",
                      LINK.iconClassName
                    )}
                  />
                  <span>{LINK.label}</span>
                </Stack>

                <Stack
                  className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition text-gray-500 dark:text-gray-300 group-hover:text-inherit"
                  justify="center"
                  align="center"
                >
                  <ArrowRight />
                </Stack>
              </Stack>
            </a>
          </li>
        ))}
      </ul>
    </Stack>
  );
}
