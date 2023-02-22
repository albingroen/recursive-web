import Stack from "./Stack";
import { Item } from "rss-parser";
import { format } from "date-fns";

interface EpisodesProps {
  episodes: Item[];
}

export default function Episodes({ episodes }: EpisodesProps) {
  return (
    <ul>
      {episodes.map((episode) => (
        <li key={episode.guid}>
          <a
            target="_blank"
            href={episode.link}
            rel="noopener noreferrer"
            className="block rounded-lg p-5 -mx-5 transition hover:bg-gray-50 dark:hover:bg-gray-800/50"
          >
            <Stack direction="vertical" spacing="small">
              <h4 className="text-2xl font-semibold dark:font-medium">
                {episode.title}
              </h4>

              <Stack direction="vertical" className="!gap-6">
                <Stack direction="vertical">
                  {episode.isoDate && (
                    <p className="text-sm text-orange-800 dark:text-orange-500/90 leading-relaxed">
                      {format(new Date(episode.isoDate), "EEEE, MMMM do, yyyy")}
                    </p>
                  )}

                  <p className="leading-relaxed">{episode.contentSnippet}.</p>
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
  );
}
