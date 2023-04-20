import Link from "next/link";
import Stack from "./Stack";
import TopMenu from "./TopMenu";

interface HeaderProps {
  description?: string;
  heading?: string;
}

export default function Header({
  description = "",
  heading = "",
}: HeaderProps) {
  return (
    <Stack direction="vertical" className="!gap-10">
      <Stack direction="vertical" className="!gap-6">
        <Link href="/">
          <h1 className="text-4xl font-bold dark:font-semibold">{heading}</h1>
        </Link>

        <p className="text-xl leading-relaxed text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </Stack>

      <TopMenu />
    </Stack>
  );
}
