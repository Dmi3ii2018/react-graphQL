import styled, {css} from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: start;
  align-items: ${({ alignItems }) => alignItems || 'start'};
  margin: ${({ margin }) => margin || 0 };
  padding: ${({ padding }) => padding || 0};
  width: ${({ width }) => width || 'auto'};

  ${({ border }) =>
    border && css`
      border: 1px solid brown;
    `
  };
`;
