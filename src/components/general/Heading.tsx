import styled from "styled-components";

interface HeadingProps {
  size?: string;
  weight?: string;
}

export const Heading = styled.h2<HeadingProps>`
  font-weight: ${(props) => props.weight || "800"};
  color: #12155c;
  font-size: ${(props) => props.size || ""};
`;
