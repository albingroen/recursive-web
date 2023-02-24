import Header from "@/components/Header";
import Page from "@/components/Page";
import Seo from "@/components/Seo";
import Sponsorship from "@/components/Sponsorship";
import { getPodcast } from "@/lib/rss";

import type { InferGetServerSidePropsType } from "next";

export default function Sponsor({
  podcast,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo description={podcast.description} title={podcast.title} />

      <Page>
        <Header description={podcast.description} heading={podcast.title} />

        <hr className="dark:border-gray-800" />

        <Sponsorship email={podcast?.itunes?.owner?.email} />
      </Page>
    </>
  );
}

export async function getServerSideProps() {
  const podcast = await getPodcast();

  return {
    props: {
      podcast,
    },
  };
}
