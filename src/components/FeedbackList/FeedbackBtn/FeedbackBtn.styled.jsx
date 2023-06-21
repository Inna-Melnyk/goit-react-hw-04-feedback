import styled from '@emotion/styled';

const setBgColor = props => {
  switch (props.children) {
    case 'good':
      return '#4fd14f';
    case 'neutral':
      return '#ffff00';
    case 'bad':
      return '#fd4545';
    default:
      return 'white';
  }
};
export const Button = styled.button`
  margin: 0;
  min-width: 65px;
  padding: 8px;
  background-color: ${setBgColor};
  cursor: pointer;
  border-radius: 8px;
  border-color: ${setBgColor};
  text-transform: capitalize;
  $:hover {
    transform: scale(0.9);
  }
`;

