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
    <Stack direction="vertical" spacing="huge">
      <h1 className="text-3xl font-bold">{heading}</h1>

      <p className="leading-relaxed text-xl text-gray-700">{description}</p>
    </Stack>
  );
}
