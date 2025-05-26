import styled from "styled-components";

interface ActiveProp {
  isActive?: boolean;
}

const NavIcon = styled.img<ActiveProp>`
  height: 20px;
  width: 20px;
  filter: ${(props) => (props.isActive ? "opacity(1)" : "opacity(.3)")};
`;

const NavText = styled.p<ActiveProp>`
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#16225D" : "#B7BABF")};
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function NavMenuItem({
  isActive,
  img,
  text,
}: {
  isActive?: boolean;
  img: string;
  text: string;
}) {
  return (
    <NavItem>
      <NavIcon isActive={isActive} src={img} alt={text}></NavIcon>
      <NavText isActive={isActive}>{text}</NavText>
    </NavItem>
  );
}
