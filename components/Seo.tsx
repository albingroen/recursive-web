import Head from "next/head";

interface SeoProps {
  canonicalUrl?: string;
  description?: string;
  title?: string;
  image?: string;
  url?: string;
}

export const TITLE = "Recursive";

export const DESCRIPTION =
  "A podcast about tech, design, side projects, and everything in between. From the latest trends in technology to the stories behind successful side-projects, this podcast covers it all. Tune in for interviews, reviews, and discussions about all things tech and design.";

const Seo = ({
  url = "https://recursivepod.com",
  description = DESCRIPTION,
  title = TITLE,
  image = "",
  canonicalUrl,
}: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default Seo;
