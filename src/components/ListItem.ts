import styled from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px 10px;
  border-radius: 10px;
  background: #383838;
  margin: 0.5rem;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
  }
`;
