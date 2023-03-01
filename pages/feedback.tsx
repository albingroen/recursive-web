import FeedbackContent from "@/components/FeedbackContent";
import Header from "@/components/Header";
import Page from "@/components/Page";
import Seo from "@/components/Seo";
import { getPodcast } from "@/lib/rss";

import type { InferGetServerSidePropsType } from "next";

export default function Feedback({
  podcast,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo description={podcast.description} title={podcast.title} />

      <Page>
        <Header description={podcast.description} heading={podcast.title} />

        <hr className="dark:border-gray-800" />

        <FeedbackContent email={podcast?.itunes?.owner?.email} />
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
