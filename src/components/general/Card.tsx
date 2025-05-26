import styled from "styled-components";

interface CardProps {
  color?: string;
  radius?: string;
  padding?: string;
}

export const Card = styled.div<CardProps>`
  background-color: ${(props) => props.color || "#f6faff"};
  border-radius: ${(props) => props.radius || "24px"};
  padding: ${(props) => props.padding || "1rem"};
`;
