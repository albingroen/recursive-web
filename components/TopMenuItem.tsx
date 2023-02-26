import Link from "next/link";
import { useRouter } from "next/router";

import classNames from "@/lib/classNames";

interface MenuItem {
  title: string;
  href: string;
}

interface TopMenuItemProps {
  menuItem: MenuItem;
}

export default function TopMenuItem({ menuItem }: TopMenuItemProps) {
  const { asPath } = useRouter();

  const isActive = asPath === menuItem.href;

  return (
    <li>
      <Link
        href={menuItem.href}
        className={classNames(
          "block px-4 py-2 border dark:border-gray-700 transition rounded-full select-none",
          isActive
            ? "bg-gray-200 dark:bg-gray-700"
            : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
        )}
      >
        {menuItem.title}
      </Link>
    </li>
  );
}
