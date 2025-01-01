import styled from "styled-components";

export const Background = styled.div`
  display: grid;
  min-height: 100dvh;
  grid-template-rows: 1fr;
  background-color: ${(props) => props.theme.dark};
`;
