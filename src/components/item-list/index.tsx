import React, { ReactElement, useState } from 'react';

import { Item } from '../../data';

interface ItemListProps {
  items: Item[];
}

export function ItemList({ items }: ItemListProps): ReactElement {
  const [ sortBy, setSortBy ] = useState('name');
  const [ sortAsc, setSortAsc ] = useState(true);

  const sortedItems = items.sort((a: Item, b: Item): number => {
    const p1 = (a as Record<string, any>)[sortBy];
    const p2 = (b as Record<string, any>)[sortBy];
    const sortOrder = sortAsc ? 1 : -1;

    return (p1 >= p2 ? 1 : -1) * sortOrder;
  });

  const onSortBy = (prop: string) => {
    if (prop === sortBy) {
      setSortAsc(!sortAsc);
    } else {
      setSortBy(prop);
    }
  };

  return (
    <div>

      <div className="flex font-medium mb-8 p-2">

        <div className="w-16"></div>
        <div
          className="cursor-pointer select-none flex-1"
          onClick={ () => onSortBy('name') }
        >
          Item
        </div>
        <div
          className="cursor-pointer select-none px-4 w-32"
          onClick={ () => onSortBy('craftingCost') }
        >
          Crafting Cost
        </div>
        <div
          className="cursor-pointer select-none px-4 w-32"
          onClick={ () => onSortBy('sellPrice') }
        >
          Sell Price
        </div>
        <div
          className="cursor-pointer select-none px-4 w-32"
          onClick={ () => onSortBy('profit') }
        >
          Profit Margin
        </div>

      </div>

      {
        sortedItems.map(item => (
          <div
            className="flex mb-4 p-2"
            key={ item.id }
          >

            <div className="w-16">

            </div>

            <div className="flex-1">
              { item.name }
            </div>

            <div className="px-4 w-32 text-right">
              { item.craftingCost }g
            </div>

            <div className="px-4 w-32 text-right">
              { item.sellPrice }g
            </div>

            <div className="px-4 w-32 text-right">
              { item.profit }g ({ item.profitMargin }%)
            </div>

          </div>
        ))
      }

    </div>
  );
}
