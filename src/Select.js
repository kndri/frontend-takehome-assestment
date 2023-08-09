import { useState } from 'react';
import styled from 'styled-components';

import List from './List';

const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`;

const Select = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const [masterItems, setMasterItems] = useState(initialItems);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsMap, setSelectedItemsMap] = useState({});
  const [filters, setFilters] = useState({ left: '', right: '' });

  const handleSelect = (item) => {
    const updatedMap = {...selectedItemsMap};
    
    if (selectedItemsMap[item.id]) {
      delete updatedMap[item.id]; 
    } else {
      updatedMap[item.id] = true;
    }
    
    setSelectedItemsMap(updatedMap);
  }

  const handleLeftFilterChange = (value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      left: value
    }));
  }

  const handleRightFilterChange = (value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      right: value
    }));
  }

  const moveAllLeft = () => {
    setSelectedItems(items);
    setItems([]);
  }

  const moveAllRight = () => {
    setItems(selectedItems);
    setSelectedItems([]);
  }

  const getSelectedItems = (selectedIds) => {
    return masterItems.filter(item => 
      selectedIds.includes(item.id)
    );
  }

  const onMoveLeft = (selectedIds) => {

    const selectedItems = getSelectedItems(selectedIds);
  
    const updatedSelectedItems = selectedItems.filter(item => { 
      return !selectedIds.includes(item.id);
    });
  
    const updatedItems = [...items, ...selectedItems];
    setMasterItems(prev => [...prev]);
    setSelectedItems(updatedSelectedItems);
    setItems(updatedItems);
  
  }
  
  const onMoveRight = (selectedIds) => {
    const selectedItems = getSelectedItems(selectedIds);
    setSelectedItems(prevItems => [...prevItems, ...selectedItems]);
    setItems(prevItems => 
      prevItems.filter(item => !selectedIds.includes(item.id))
    );
  }


  return (
    <SelectContainer>
      <List
        filter={filters.left}
        items={items}
        onFilterChange={handleLeftFilterChange}
        onMoveAll={moveAllLeft}
        onSelect={handleSelect}
        selectedItemsMap={selectedItemsMap}
        onMove={onMoveRight}
      />

      <List
        filter={filters.right}
        items={selectedItems}
        onFilterChange={handleRightFilterChange}
        onMoveAll={moveAllRight}
        onMove={onMoveLeft}
        onSelect={handleSelect}
        selectedItemsMap={selectedItemsMap}
      />
    </SelectContainer>
  );
}

export default Select;