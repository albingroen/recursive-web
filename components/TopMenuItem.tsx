import Link from "next/link";
import { useRouter } from "next/router";

import classNames from "@/lib/classNames";

interface MenuItem {
  title: string;
  href: string;
}

interface TopMenuItemProps {
  menuItem: MenuItem;
  index: number;
}

export default function TopMenuItem({ menuItem, index }: TopMenuItemProps) {
  const { asPath } = useRouter();

  const isActive = asPath === menuItem.href;

  return (
    <li className={index === 0 ? "ml-2 mr-4" : "mx-4"}>
      <Link href={menuItem.href}>
        <span
          className={classNames(
            "block p-2 -mx-2 transition rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 group",
            isActive
              ? "bg-gray-200 dark:bg-gray-600"
              : "bg-gray-100 dark:bg-gray-800"
          )}
        >
          {menuItem.title}
        </span>
      </Link>
    </li>
  );
}
