import styled from 'styled-components';

import ListItem from './ListItem';
import useFilteredItems from './useFilteredItems';


const ListContainer = styled.div`
  border-radius: 4px;
  border: 2px solid #000;
  min-height: 300px;
  overflow: hidden;
  width: 400px;
  position: relative;
`;

const FilterInput = styled.input`
  border-bottom: 2px solid #000;
  border: 3px solid #000;
  margin-bottom: 8px;
  padding: 8px;
  width: 100%;
`;

const EmptyMessage = styled.div`
  padding: 16px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  bottom: 0;
  position: absolute;
  width: 100%;
`

const MoveSelectedButton = styled.button`
  margin-top: 12px;
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #0062cc;
  }

  &:active {
    background: #0056b3;
  }
`;

const MoveAllButton = styled.button`
  background: blue;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 8px;
  padding: 8px; 
`;

const List = ({
  items,
  filter,
  onSelect,
  onFilterChange,
  onMoveAll,
  selectedItemsMap,
  onMove,
}) => {

  const filteredItems = useFilteredItems(items, filter);

  const getSelectedIds = () => {
    const selectedIds = [];

    for (const id in selectedItemsMap) {
      if (selectedItemsMap[id]) {
        selectedIds.push(parseInt(id));
      }
    }

    return selectedIds;
  }

  const moveSelected = () => {
    const selectedIds = getSelectedIds();
    onMove(selectedIds);
  }

  return (
    <ListContainer>

      <FilterInput
        value={filter}
        placeholder='Filter List'
        onChange={e => onFilterChange(e.target.value)}
      />

      {filteredItems?.length === 0 && (
        <EmptyMessage>No items to display</EmptyMessage>
      )}

      {filteredItems?.map(item => (
        <ListItem
          key={item.id}
          item={item}
          selected={selectedItemsMap[item.id]}
          onSelect={onSelect}
        />
      ))}
      <ButtonContainer>
        <MoveSelectedButton onClick={moveSelected}>
          Move Selected
        </MoveSelectedButton>
        <MoveAllButton onClick={onMoveAll}>Move All</MoveAllButton>
      </ButtonContainer>
    </ListContainer>
  );
}

export default List;