import styled from "styled-components";

interface PLanCardProps {
  color?: string;
  radius?: string;
  padding?: string;
}

const PlanWrapper = styled.div`
  background-color: #dde2f9;
  border-radius: 24px;
  padding: 1.5rem;
`;

const PlanHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlanTitle = styled.p`
  color: #12155c;
  font-weight: 600;
  margin: 0 0;
`;

const PlanEmoji = styled.p`
  font-size: 1.5rem;
  margin: 0 0;
`;

const PlanPara = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 4px;
`;

const PlanParaAlt = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin: 0 0;
`;

export default function PlanCard() {
  return (
    <PlanWrapper>
      <PlanHead>
        <PlanTitle>Dentist</PlanTitle>
        <PlanEmoji>🦷</PlanEmoji>
      </PlanHead>
      <PlanPara>09:00-11:00</PlanPara>
      <PlanParaAlt>Dr. Camrean Wrinkelvoss</PlanParaAlt>
    </PlanWrapper>
  );
}
