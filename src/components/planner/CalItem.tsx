import styled from "styled-components";

interface CalItemProps {
  big?: boolean;
  active?: boolean;
  selected?: boolean;
}

const CalItemContainer = styled.div<CalItemProps>`
  display: flex;
  gap: 0.4rem;
  background-color: ${(props) => (props.selected ? "#EDF5FD" : "")};
  border-radius: 18px;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
  align-items: center;
`;

const BlueText = styled.p<CalItemProps>`
  color: ${(props) => (props.active ? "#fff" : "#1d1c5d")};
  font-size: ${(props) => (props.big ? "1.5rem" : "12px")};
  border-radius: 12px;
  font-weight: ${(props) => (props.big ? "700" : "400")};
  background-color: ${(props) =>
    props.active && props.selected ? "#3C34AC" : props.active ? "#ADB0D6" : ""};
  padding: ${(props) => (props.big ? "0rem 0.8rem;" : "0.5rem 0.8rem")};
  margin-top: 0;
  margin-bottom: ${(props) => (props.big ? "8px" : "0")};
`;

export default function CalItem({
  selected,
  day,
  date,
  time1,
  time2,
  time3,
}: {
  selected: boolean;
  day: string;
  date: string;
  time1: { active: boolean; value: string };
  time2: { active: boolean; value: string };
  time3: { active: boolean; value: string };
}) {
  return (
    <CalItemContainer selected={selected}>
      <BlueText>{day}</BlueText>
      <BlueText big={true}>{date}</BlueText>
      <BlueText selected={selected} active={time1.active}>
        {time1.value}
      </BlueText>
      <BlueText selected={selected} active={time2.active}>
        {time2.value}
      </BlueText>
      <BlueText selected={selected} active={time3.active}>
        {time3.value}
      </BlueText>
    </CalItemContainer>
  );
}
