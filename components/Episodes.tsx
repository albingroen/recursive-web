import Link from "next/link";
import Episode from "./Episode";
import { Item } from "rss-parser";

interface EpisodesProps {
  episodes: Item[];
}

export default function Episodes({ episodes }: EpisodesProps) {
  return (
    <ul>
      {episodes.map((episode) => (
        <li key={episode.guid}>
          <Link
            href={`/episodes/${episode.guid}`}
            className="block rounded-lg p-5 -mx-5 transition hover:bg-gray-50 dark:hover:bg-gray-800/50"
          >
            <Episode episode={episode} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
