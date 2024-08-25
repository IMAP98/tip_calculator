import type { MenuItemT } from "../types";

// * NOTE: TYPES

type MenuItemPropsT = {
    item : MenuItemT;
    addItem : (item : MenuItemT) => void;
}

// * NOTE: Component

export const MenuItem = ({item, addItem} : MenuItemPropsT) => {
    return (
      <button
          className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 rounded-lg flex justify-between"
          onClick={() => addItem(item)}
      >
          <p>{item.name}</p>
          <p className="font-black">${item.price}</p>
      </button>
    )
}
