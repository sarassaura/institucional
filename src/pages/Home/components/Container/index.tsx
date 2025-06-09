import styled from "styled-components";

interface ContainerProps {
  secondary?: boolean;
  gap?: string;
}

const Container = styled.div<ContainerProps>`
  padding: 64px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.secondary && "var(--mui-palette-secondary-main)"};
  gap: ${(props) => props.gap};
`;

export default Container;
