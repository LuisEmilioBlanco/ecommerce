import styled from 'styled-components';

const StyledItemCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  span {
    font-size: 18px;
    font-weight: bold;
    margin: 0 10px;
  }
`;

export default StyledItemCount;