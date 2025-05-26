import styled from "styled-components";

const BtnTxt = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #37339f;
`;

const BtnImg = styled.img`
  height: 8px;
  width: 8px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export default function BtnIcn({ img, txt }: { img?: string; txt: string }) {
  return (
    <BtnContainer>
      <BtnTxt>{txt}</BtnTxt>
      <BtnImg src={img} alt="button icon" />
    </BtnContainer>
  );
}
