import styled from "styled-components";

interface NavWrapperProps {
  head?: string;
}

const NavWrapper = styled.div<NavWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1rem;
  min-width: 74%;

  &::before {
    font-size: 14px;
    font-weight: 500;
    color: rgb(188, 188, 188);
    content: "${(props) => props.head || ""}";
  }
`;

export { NavWrapper };
