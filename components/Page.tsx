import Content from "./Content";
import ContentWrapper from "./ContentWrapper";
import Sidebar from "./Sidebar";
import Stack from "./Stack";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <Stack className="md:h-screen flex-col md:flex-row" spacing="none">
      <Sidebar />

      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
    </Stack>
  );
}
