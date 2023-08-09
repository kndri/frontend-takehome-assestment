import styled from 'styled-components';

const SelectedIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #007bff;
  margin-right: 8px;
`;

const ItemContainer = styled.div`
  padding: 8px 12px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }

  ${({ selected }) => selected && `
    background: #e2f2ff;
    font-weight: 600;
  `}
`;


function ListItem({ item, selected, onSelect }) {

  const handleClick = () => {
    onSelect(item);
  }
  
  return (
    <ItemContainer selected={selected} onClick={handleClick}>
      {selected && <SelectedIcon/>}
      {item.color}
    </ItemContainer>
  );

}

export default ListItem;