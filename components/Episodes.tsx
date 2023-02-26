import Link from "next/link";
import Episode from "./Episode";
import { Item } from "rss-parser";
import classNames from "@/lib/classNames";

interface EpisodesProps {
  episodes: Item[];
}

export default function Episodes({ episodes }: EpisodesProps) {
  return (
    <ul>
      {episodes.map((episode, i) => (
        <li key={episode.guid}>
          <Link
            href={`/episodes/${episode.guid}`}
            className={classNames(
              "block rounded-lg p-5 -mx-5 transition hover:bg-gray-50 dark:hover:bg-gray-800/50",
              i ? "-mx-5" : "-mx-5 -mt-5"
            )}
          >
            <Episode episode={episode} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
