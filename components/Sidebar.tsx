import Hosts from "./Hosts";
import Links from "./Links";
import Logo from "./Logo";
import Stack from "./Stack";

export default function Sidebar() {
  return (
    <Stack
      className="bg-gray-100 dark:bg-gray-800/50 p-8 md:p-12 md:w-2/5 items-center md:items-end"
      direction="vertical"
    >
      <Stack direction="vertical" className="!gap-8" align="center">
        <Logo />

        <Links />

        <hr className="w-full dark:border-gray-700" />

        <Hosts />
      </Stack>
    </Stack>
  );
}
