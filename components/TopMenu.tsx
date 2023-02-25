import Stack from "./Stack";
import TopMenuItem from "./TopMenuItem";

export const MENU_ITEMS = [
  { url: "/", name: "Episodes" },
  { url: "/feedback", name: "Feedback" },
  { url: "/sponsor", name: "Sponsor" },
];

export default function TopMenu() {
  return (
    <Stack>
      <ul className="flex flex-row flex-wrap">
        {MENU_ITEMS.map((MENU_ITEM, index) => (
          <TopMenuItem
            menuItem={MENU_ITEM}
            key={MENU_ITEM.name}
            index={index}
          />
        ))}
      </ul>
    </Stack>
  );
}
