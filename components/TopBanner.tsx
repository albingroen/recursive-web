import Stack from "./Stack";

const HEADER = "Taking a break";
const SUBTITLE = "We are enjoying a little break and will be back soon!";

export default function TopBanner() {
  return (
    <div className="sticky top-0 left-0 right-0 p-2 bg-orange-400 dark:bg-orange-600/90 z-50">
      <Stack
        wrap
        direction="vertical"
        spacing="none"
        justify="center"
        align="center"
        className="text-center"
      >
        <p className="font-semibold">{HEADER}</p>
        <p className="text-sm">{SUBTITLE}</p>
      </Stack>
    </div>
  );
}
