import styled from 'styled-components';

const ContainerStyled = styled.div`
  position: relative;
  height: 100vh;
  background-color: #f3f3f4;
`;

const SpinnerStyled = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
`;

export { ContainerStyled, SpinnerStyled };
