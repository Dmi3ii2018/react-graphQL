import styled, {css} from 'styled-components';

export const Button = styled.button.attrs(() => ({
  type: "submit",
}))`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${({ primary }) => primary ? 'violet' : 'palevioletred'};
  border: ${({primary}) =>
    primary ? '2px solid violet' : '2px solid palevioletred'};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: ${props =>
      props.primary ? 'violet' : 'palevioletred'
    };
    color: white;
  }

  ${({ bg }) =>
    bg && css`
      background-color: ${bg};
    `
  }
`;

export const GreenButton = styled(Button)`
  background-color: green;
`;
