import Parser from "rss-parser";

const RSSParser = new Parser();

export async function getPodcast() {
  return RSSParser.parseURL("https://anchor.fm/s/d8eb16fc/podcast/rss");
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
