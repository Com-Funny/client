import { ReactElement } from "react";
import styled from "styled-components";

interface PageContainerProps {
  children: ReactElement | ReactElement[];
}

export default function PageContainer({ children }: PageContainerProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
