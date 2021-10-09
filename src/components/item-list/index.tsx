import React, { ReactElement } from 'react';

import { Item } from '../../data';

interface ItemListProps {
  items: Item[];
}

export function ItemList({ items }: ItemListProps): ReactElement {
  return (
    <div>

      <div className="flex">

        <div></div>
        <div>Item</div>
        <div>Crafting Cost</div>
        <div>Sell Price</div>
        <div>Profit Margin</div>

      </div>

      {
        items.map(item => (
          <div className="flex" key={ item.id }>

            <div></div>
            <div>{ item.name }</div>
            <div>{ item.craftingCost }</div>
            <div>{ item.sellPrice }</div>
            <div>{ item.profitMargin } ({ item.profitMarginPercentage }%)</div>

          </div>
        ))
      }

    </div>
  );
}