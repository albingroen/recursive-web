import Image from "next/image";
import Seo from "@/components/Seo";
import Stack from "@/components/Stack";
import { InferGetServerSidePropsType } from "next";
import { format } from "date-fns";
import { getPodcast } from "@/lib/rss";

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
    url: "https://github.com/albingroen/recursive-web/issues/new",
    image: "/github.png",
    label: "Submit a question",
  },
];

const HOSTS = [
  {
    url: "https://twitter.com/albingroen",
    photo: "/albin.jpeg",
    name: "Albin Groen",
  },
  {
    url: "https://twitter.com/sgnilreutr",
    name: "Robbert Tuerlings",
    photo: "/robbert.jpeg",
  },
];

export default function Home({
  podcast,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo description={podcast.description} title={podcast.title} />

      <Stack className="md:h-screen flex-col md:flex-row" spacing="none">
        <Stack
          className="bg-gray-100 p-8 md:p-12 md:w-2/5 items-center md:items-end"
          direction="vertical"
        >
          <Stack direction="vertical" className="!gap-8" align="center">
            <Image
              alt="Recursive logo"
              src="/icon.png"
              width={500}
              height={500}
              className="h-64 w-64 rounded-xl object-center object-cover shadow-xl shadow-gray-400/80"
              placeholder="blur"
              blurDataURL="data:image/png;base64,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"
            />

            <Stack direction="vertical" className="w-full">
              <p className="text-lg font-semibold">Links</p>

              <ul className="w-full space-y-1.5">
                {LINKS.map((LINK) => (
                  <li key={LINK.label}>
                    <a
                      href={LINK.url}
                      className="block rounded-xl hover:bg-gray-200 transition p-2 -mx-2 group"
                    >
                      <Stack align="center" justify="between">
                        <Stack align="center">
                          <Image
                            alt=""
                            src={LINK.image}
                            width={50}
                            height={50}
                            className="w-8 h-8"
                          />
                          <span>{LINK.label}</span>
                        </Stack>

                        <Stack
                          className="h-6 w-6 rounded-full bg-gray-200 group-hover:bg-gray-300 transition text-gray-500 group-hover:text-inherit"
                          justify="center"
                          align="center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </Stack>
                      </Stack>
                    </a>
                  </li>
                ))}
              </ul>
            </Stack>

            <hr className="w-full" />

            <Stack direction="vertical" className="w-full">
              <p className="text-lg font-semibold">Hosts</p>

              <ul>
                {HOSTS.map((HOST) => (
                  <li key={HOST.name}>
                    <a
                      href={HOST.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl hover:bg-gray-200 transition p-2 -mx-2 group"
                    >
                      <Stack align="center" justify="between">
                        <Stack align="center">
                          <Image
                            alt=""
                            src={HOST.photo}
                            width={50}
                            height={50}
                            className="w-8 h-8 grayscale rounded-full"
                          />
                          <span>{HOST.name}</span>
                        </Stack>
                      </Stack>
                    </a>
                  </li>
                ))}
              </ul>
            </Stack>
          </Stack>
        </Stack>

        <div className="md:w-3/5 p-8 md:p-12 pt-10 md:pt-14 overflow-y-auto">
          <Stack direction="vertical" className="max-w-xl !gap-10">
            <Stack direction="vertical" spacing="huge">
              <h1 className="text-3xl font-bold">{podcast.title}</h1>

              <p className="leading-relaxed text-xl text-gray-700">
                {podcast.description}
              </p>
            </Stack>

            <hr />

            <ul>
              {podcast.items.map((episode) => (
                <li key={episode.guid}>
                  <a
                    target="_blank"
                    href={episode.link}
                    rel="noopener noreferrer"
                    className="block rounded-lg p-5 -mx-5 transition hover:bg-gray-50"
                  >
                    <Stack direction="vertical" spacing="small">
                      <h4 className="text-2xl font-semibold">
                        {episode.title}
                      </h4>

                      <Stack direction="vertical" spacing="huge">
                        <Stack direction="vertical" spacing="large">
                          {episode.isoDate && (
                            <p className="text-sm text-[#BA4021] leading-relaxed">
                              {format(
                                new Date(episode.isoDate),
                                "EEEE, MMMM do, yyyy"
                              )}
                            </p>
                          )}

                          <p className="leading-relaxed">
                            {episode.contentSnippet}.
                          </p>
                        </Stack>

                        {episode.enclosure?.url && episode.enclosure?.type && (
                          <audio controls className="w-full">
                            <source
                              src={episode.enclosure.url}
                              type={episode.enclosure.type}
                            />
                          </audio>
                        )}
                      </Stack>
                    </Stack>
                  </a>
                </li>
              ))}
            </ul>
          </Stack>
        </div>
      </Stack>
    </>
  );
}

export async function getServerSideProps() {
  const podcast = await getPodcast();

  return {
    props: {
      podcast,
    },
  };
}
