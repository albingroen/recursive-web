import Stack from "./Stack";
import TopMenuItem from "./TopMenuItem";

const MENU_ITEMS = [
  { href: "/", title: "Episodes" },
  { href: "/feedback", title: "Feedback" },
  { href: "/sponsor", title: "Sponsor" },
];

export default function TopMenu() {
  return (
    <Stack>
      <ul className="flex flex-row flex-wrap">
        {MENU_ITEMS.map((MENU_ITEM, index) => (
          <TopMenuItem
            menuItem={MENU_ITEM}
            key={MENU_ITEM.title}
            index={index}
          />
        ))}
      </ul>
    </Stack>
  );
}
