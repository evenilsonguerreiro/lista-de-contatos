import styled, { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
`;

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default EstiloGlobal;
