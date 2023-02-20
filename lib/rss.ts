import Parser from "rss-parser";

const RSSParser = new Parser();

export async function getPodcast() {
  return RSSParser.parseURL("https://anchor.fm/s/d8eb16fc/podcast/rss");
}
