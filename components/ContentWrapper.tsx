import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

export default function ContentWrapper({ children }: ContentProps) {
  return (
    <div className="md:w-3/5 p-8 md:p-12 pt-10 md:pt-14 overflow-y-auto">
      {children}
    </div>
  );
}
