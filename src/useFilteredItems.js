import { useMemo } from 'react';

const useFilteredItems = (items, filter) => {
  const filteredItems = useMemo(() => {
    if (!filter) return items;
        return items?.filter(item => {
      return item.color.toLowerCase().includes(filter.toLowerCase());
    });
  }, [items, filter]);

  return filteredItems;
}

export default useFilteredItems;