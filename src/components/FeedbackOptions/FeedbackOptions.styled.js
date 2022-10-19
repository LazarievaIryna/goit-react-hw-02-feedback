import styled from 'styled-components';
export const ListButton = styled.ul`
  display: flex;
  margin-bottom: 26px;
`;
export const ListItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
export const Button = styled.button`
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-size: 16px;
  font-weight: 500;
  /* padding: 6px; */
  ::first-letter {
    text-transform: uppercase;
  }
`;
