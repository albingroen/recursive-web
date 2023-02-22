import Link from "next/link";
import Stack from "./Stack";

interface HeaderProps {
  description?: string;
  heading?: string;
}

export default function Header({
  description = "",
  heading = "",
}: HeaderProps) {
  return (
    <Stack direction="vertical" className="!gap-6">
      <Link href="/">
        <h1 className="text-4xl font-bold dark:font-semibold">{heading}</h1>
      </Link>

      <p className="leading-relaxed text-xl text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </Stack>
  );
}
