import Parser from "rss-parser";
import { RSS_FEED } from "./constants";

const RSSParser = new Parser();

export async function getPodcast() {
  return RSSParser.parseURL(RSS_FEED);
}

export async function getEpisode(id: string) {
  const podcast = await RSSParser.parseURL(
    "https://anchor.fm/s/d8eb16fc/podcast/rss"
  );

  if (!podcast) return;

  return {
    episode: podcast.items.find(({ guid }) => guid === id),
    podcast,
  };
}
