import styled from "styled-components";

interface HeadingProps {
  size?: string;
}

export const Heading = styled.h2<HeadingProps>`
  font-weight: 800;
  color: #12155c;
  font-size: ${(props) => props.size || ""};
`;
