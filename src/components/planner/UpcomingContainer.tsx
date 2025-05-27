import styled from "styled-components";

interface UpComProps {
  title?: string;
}

export const UpcomingContainer = styled.div<UpComProps>`
  display: flex;
  position: relative;
  gap: 1rem;
  padding-top: 1rem;

  &::before {
    font-size: 14px;
    position: absolute;
    font-weight: 500;
    top: -1rem;
    color: rgb(188, 188, 188);
    content: "${(props) => props.title || ""}";
  }
`;
