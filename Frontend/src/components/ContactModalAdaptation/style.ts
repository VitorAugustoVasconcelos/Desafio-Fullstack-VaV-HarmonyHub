import styled from 'styled-components';

const EditModalStyled = styled.div`
  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: var(--color-shade200);
      font-size: clamp(var(--font-size5), 5vw, var(--font-size3));
    }
  }

  & > :nth-child(2) {
    button {
      margin-top: 35px;
    }
  }
`;

const EditModalFailStyled = styled.p`
  margin-top: 10px;
  color: var(--color-negative);
  font-size: clamp(var(--font-size9), 3vw, var(--font-size6));
`;

export { EditModalStyled, EditModalFailStyled };
