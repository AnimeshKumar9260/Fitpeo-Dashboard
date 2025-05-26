import styled from "styled-components";
import { Card } from "../general/Card";

interface StatBoxProps {
  color?: string;
  progress?: string;
}

const StatSubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProgressContainer = styled.div`
  background-color: #dbdee8;
  max-height: 0.6rem;
  overflow: hidden;
  border-radius: 10rem;
`;

const Progress = styled.div<StatBoxProps>`
  background-color: ${(props) => props.color || ""};
  width: ${(props) => props.progress || ""};
`;

export default function StatBox({
  emoji,
  name,
  date,
  color,
  progress,
}: {
  emoji: string;
  name: string;
  date: string;
  color: string;
  progress: string;
}) {
  return (
    <Card>
      <StatSubContainer>
        <p className="emoji">{emoji}</p>
        <p className="emoji-head">{name}</p>
      </StatSubContainer>
      <p className="as-of-date">Date: {date}</p>
      <ProgressContainer>
        <Progress color={color} progress={progress}>
          &nbsp;
        </Progress>
      </ProgressContainer>
    </Card>
  );
}
