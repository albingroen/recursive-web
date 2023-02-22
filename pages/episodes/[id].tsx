import EpisodeComponent from "@/components/Episode";
import Header from "@/components/Header";
import Page from "@/components/Page";
import Seo from "@/components/Seo";
import { Item, Output } from "rss-parser";
import { getEpisode } from "@/lib/rss";

interface EpisodeProps {
  podcast: Output<Item>;
  episode: Item;
}

export default function Episode({ podcast, episode }: EpisodeProps) {
  return (
    <>
      <Seo description={episode.contentSnippet} title={episode.title} />

      <Page>
        <Header description={podcast.description} heading={podcast.title} />

        <hr className="dark:border-gray-800" />

        <EpisodeComponent episode={episode} />
      </Page>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const id = params?.id as string;

  if (!id) {
    return {
      props: {},
    };
  }

  const result = await getEpisode(id);

  if (!result) {
    return {
      props: {},
    };
  }

  return {
    props: result,
  };
}
