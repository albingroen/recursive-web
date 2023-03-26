import Stack from "./Stack";
import { Item } from "rss-parser";
import { format } from "date-fns";
import sanitizeHtml from "sanitize-html";

interface EpisodeProps {
  inList?: boolean;
  episode: Item;
}

export default function Episode({ inList, episode }: EpisodeProps) {
  return (
    <Stack direction="vertical" spacing="small">
      <h4 className="text-2xl font-semibold dark:font-medium">
        {episode.title}
      </h4>

      <Stack direction="vertical" className="!gap-7">
        <Stack direction="vertical" spacing="huge">
          {episode.isoDate && (
            <p className="text-sm text-orange-800 dark:text-orange-500/90 leading-relaxed">
              {format(new Date(episode.isoDate), "EEEE, MMMM do, yyyy")}
            </p>
          )}

          {episode.enclosure?.url && episode.enclosure?.type && (
            <audio controls className="w-full">
              <source
                src={episode.enclosure.url}
                type={episode.enclosure.type}
              />
            </audio>
          )}

          {inList ? (
            episode.contentSnippet ? (
              <p className="leading-relaxed">
                {episode.contentSnippet.substring(0, 250)}...
              </p>
            ) : null
          ) : episode.content ? (
            <article
              className="prose dark:prose-invert prose-orange dark:prose-a:font-normal prose-a:underline-offset-4 prose-a:decoration-0"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(episode.content),
              }}
            />
          ) : null}
        </Stack>
      </Stack>
    </Stack>
  );
}
