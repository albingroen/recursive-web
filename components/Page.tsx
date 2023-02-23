import Content from "./Content";
import ContentWrapper from "./ContentWrapper";
import Sidebar from "./Sidebar";
import Stack from "./Stack";
import type { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <Stack className="flex-col md:h-screen md:flex-row" spacing="none">
      <Sidebar />

      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
    </Stack>
  );
}
