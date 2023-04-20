import ArrowRight from "./ArrowRight";
import Image from "next/image";
import Stack from "./Stack";
import classNames from "@/lib/classNames";
import { RSS_FEED } from "@/lib/constants";

const LINKS = [
  {
    url: "https://podcasts.apple.com/se/podcast/recursive/id1673088294?l=en",
    image: "/apple-podcast.png",
    label: "Apple Podcasts",
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
    url: RSS_FEED,
    image: "/rss.png",
    label: "RSS Feed",
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
              className="block p-2 -mx-2 transition rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 group"
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
                  className="w-6 h-6 text-neutral-500 transition bg-neutral-200 rounded-full dark:bg-neutral-700 group-hover:bg-neutral-300 dark:group-hover:bg-neutral-600 dark:text-neutral-300 group-hover:text-inherit"
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
