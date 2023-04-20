import Hosts from "./Hosts";
import Link from "next/link";
import Links from "./Links";
import Logo from "./Logo";
import Stack from "./Stack";

export default function Sidebar() {
  return (
    <Stack
      className="bg-neutral-100 dark:bg-neutral-800/50 p-8 md:p-12 md:w-2/5 items-center md:items-end"
      direction="vertical"
    >
      <Stack direction="vertical" className="!gap-8" align="center">
        <Link className="block" href="/">
          <Logo />
        </Link>

        <Links />

        <hr className="w-full dark:border-neutral-700/50" />

        <Hosts />
      </Stack>
    </Stack>
  );
}
