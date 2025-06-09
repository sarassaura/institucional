import styled from "styled-components";

interface GridItemProps {
  column?: boolean;
  gap?: string;
}

const GridItem = styled.div<GridItemProps>`
  padding: 20px 36px;
  display: flex;
  height: 100%;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  background-color: var(--mui-palette-secondary-main);
  border-radius: 1rem;
  align-items: baseline;
  color: black;
  gap: ${(props) => props.gap};
`;

export default GridItem;
