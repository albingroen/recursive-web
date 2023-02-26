import TopMenuItem from "./TopMenuItem";

const MENU_ITEMS = [
  { href: "/", title: "Episodes" },
  { href: "/feedback", title: "Feedback" },
  { href: "/sponsor", title: "Sponsor" },
];

export default function TopMenu() {
  return (
    <ul className="flex flex-row flex-wrap gap-3">
      {MENU_ITEMS.map((MENU_ITEM) => (
        <li key={MENU_ITEM.title}>
          <TopMenuItem menuItem={MENU_ITEM} />
        </li>
      ))}
    </ul>
  );
}
