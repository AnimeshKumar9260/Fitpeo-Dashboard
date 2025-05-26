import styled from "styled-components";

interface DashboardGraphItem {
  line1: string[];
  line2: string;
  line3: string[];
  line4: string;
  day: string;
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemGridBox = styled.div`
  display: grid;
  gap: 0.6rem;
  grid-template-columns: repeat(4, 1fr);
`;

const Line1 = styled.div`
  max-width: 1rem;
  height: 80px;
  border-radius: 10rem;
  align-self: center;
  display: grid;
  gap: 0.2rem;
`;

const Line2 = styled.div`
  max-width: 1rem;
  height: 40px;
  border-radius: 10rem;
  align-self: center;
  margin-bottom: 0.5rem;
`;

const Line3 = styled.div`
  max-width: 1rem;
  height: 40px;
  border-radius: 10rem;
  align-self: center;
  margin-top: 1rem;
  display: grid;
  gap: 0.2rem;
`;

const Line4 = styled.div`
  max-width: 1rem;
  height: 25px;
  border-radius: 10rem;
  align-self: end;
`;

export default function GraphItem(data: DashboardGraphItem) {
  return (
    <ItemContainer>
      <ItemGridBox>
        <Line1>
          {data.line1.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: `${item}`, borderRadius: "10rem" }}
            >
              &nbsp;
            </div>
          ))}
        </Line1>
        <Line2 style={{ backgroundColor: `${data.line2}` }}>&nbsp;</Line2>
        <Line3>
          {data.line3.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: `${item}`, borderRadius: "10rem" }}
            >
              &nbsp;
            </div>
          ))}
        </Line3>
        <Line4 style={{ backgroundColor: `${data.line4}` }}>&nbsp;</Line4>
      </ItemGridBox>
      {/* <p>{data.day}</p> */}
    </ItemContainer>
  );
}
