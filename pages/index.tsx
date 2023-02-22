import Episodes from "@/components/Episodes";
import Header from "@/components/Header";
import Seo from "@/components/Seo";
import Sidebar from "@/components/Sidebar";
import Stack from "@/components/Stack";
import { InferGetServerSidePropsType } from "next";
import { getPodcast } from "@/lib/rss";

export default function Home({
  podcast,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo description={podcast.description} title={podcast.title} />

      <Stack className="md:h-screen flex-col md:flex-row" spacing="none">
        <Sidebar />

        <div className="md:w-3/5 p-8 md:p-12 pt-10 md:pt-14 overflow-y-auto">
          <Stack direction="vertical" className="max-w-xl !gap-10">
            <Header description={podcast.description} heading={podcast.title} />

            <hr />

            <Episodes episodes={podcast.items} />
          </Stack>
        </div>
      </Stack>
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
