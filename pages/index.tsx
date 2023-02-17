import Seo, { DESCRIPTION, TITLE } from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo />

      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
    </>
  );
}
