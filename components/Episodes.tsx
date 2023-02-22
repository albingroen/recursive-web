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
            className="block rounded-lg p-5 -mx-5 transition hover:bg-gray-50"
          >
            <Stack direction="vertical" spacing="small">
              <h4 className="text-2xl font-semibold">{episode.title}</h4>

              <Stack direction="vertical" spacing="huge">
                <Stack direction="vertical" spacing="large">
                  {episode.isoDate && (
                    <p className="text-sm text-[#BA4021] leading-relaxed">
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
