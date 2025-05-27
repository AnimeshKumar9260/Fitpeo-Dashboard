import styled from "styled-components";

interface PLanCardProps {
  color?: string;
}

const PlanWrapper = styled.div<PLanCardProps>`
  background-color: ${(props) => props.color || "#dde2f9"};
  color: ${(props) => (props.color ? "#fff" : "")};
  border-radius: 24px;
  padding: 1.5rem;
`;

const PlanHead = styled.div`
  display: flex;
  margin-bottom: 0.4rem;
  justify-content: space-between;
  align-items: center;
`;

const PlanTitle = styled.p<PLanCardProps>`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.color ? "#fff" : "#12155")};
  margin: 0 0;
`;

const PlanEmoji = styled.p`
  font-size: 1.2rem;
  margin: 0 0;
`;

const PlanPara = styled.p`
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 4px;
`;

const PlanParaAlt = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin: 0 0;
`;

export default function PlanCard({
  color,
  title,
  emoji,
  time,
  name,
}: {
  color?: string;
  title: string;
  emoji: string;
  time: string;
  name?: string;
}) {
  return (
    <PlanWrapper color={color}>
      <PlanHead>
        <PlanTitle color={color}>{title}</PlanTitle>
        <PlanEmoji>{emoji}</PlanEmoji>
      </PlanHead>
      <PlanPara>{time}</PlanPara>
      {name ? <PlanParaAlt>{name}</PlanParaAlt> : <></>}
    </PlanWrapper>
  );
}
