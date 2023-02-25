import Link from "next/link";
import { useRouter } from "next/router";

import classNames from "@/lib/classNames";

import { MENU_ITEMS } from "./TopMenu";

interface TopMenuItemProps {
  menuItem: (typeof MENU_ITEMS)[0];
  index: number;
}

export default function TopMenuItem({ menuItem, index }: TopMenuItemProps) {
  const { asPath } = useRouter();

  const isActive = asPath === menuItem.url;

  return (
    <li className={index === 0 ? "ml-2 mr-4" : "mx-4"}>
      <Link href={menuItem.url}>
        <span
          className={classNames(
            "block p-2 -mx-2 transition rounded-xl bg-gray-100  hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 group",
            isActive ? "bg-gray-200 dark:bg-gray-600" : undefined
          )}
        >
          {menuItem.name}
        </span>
      </Link>
    </li>
  );
}
