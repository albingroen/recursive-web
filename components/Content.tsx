import Stack from "./Stack";
import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <Stack direction="vertical" className="max-w-xl !gap-10">
      {children}
    </Stack>
  );
}
