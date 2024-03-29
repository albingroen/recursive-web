import Episodes from "@/components/Episodes";
import Header from "@/components/Header";
import Page from "@/components/Page";
import Seo from "@/components/Seo";
import { getPodcast } from "@/lib/rss";

import type { InferGetStaticPropsType } from "next";

export default function Home({
  podcast,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo description={podcast.description} title={podcast.title} />

      <Page>
        <Header description={podcast.description} heading={podcast.title} />

        <hr className="dark:border-neutral-800" />

        <Episodes episodes={podcast.items} />
      </Page>
    </>
  );
}

export async function getStaticProps() {
  const podcast = await getPodcast();

  return {
    props: {
      podcast,
    },
  };
}
