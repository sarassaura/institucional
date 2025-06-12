import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface SubtitleProps {
  fontWeight?: string | number;
}

const SubTitle = styled(Typography)<SubtitleProps>`
  color: var(--mui-palette-neutral-800);
  font-size: 24px;
  font-weight: ${(props) => props.fontWeight || 600};
  margin-top: 8px;
`;

export default SubTitle;
