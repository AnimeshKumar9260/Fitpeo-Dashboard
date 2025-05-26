import styled from "styled-components";
import scan from "../../assets/dashboard/scan.webp";

interface ToolTipProps {
  bg?: string;
  reverse?: boolean;
}

const ToolTipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToolTipContainerInner = styled.div<ToolTipProps>`
  order: ${(props) => props.reverse && "0"};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  border-radius: 8px;
  padding: 0.3rem 0.5rem;
  background-color: ${(props) => props.bg || ""};
`;

const Scanner = styled.img<ToolTipProps>`
  order: ${(props) => props.reverse && "1"};
  height: 35px;
  width: 30px;
`;

const Para = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.8rem;
`;

const Para2 = styled.p<ToolTipProps>`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 9px;
  color: ${(props) => (props.reverse ? "#3633B3" : "#fff")};
`;

export default function ToolTip({
  reverse,
  bg,
  emoji,
  text,
}: {
  reverse?: boolean;
  bg?: string;
  emoji: string;
  text: string;
}) {
  return (
    <ToolTipContainer>
      <Scanner src={scan} alt="scan" reverse={reverse} />
      <ToolTipContainerInner bg={bg} reverse={reverse}>
        <Para>{emoji}</Para>
        <Para2 reverse={reverse}>{text}</Para2>
      </ToolTipContainerInner>
    </ToolTipContainer>
  );
}
