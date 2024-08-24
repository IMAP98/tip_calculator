import type { MenuItemT } from "../types";

// * NOTE: TYPES
type MenuItemPropsT = {
  item : MenuItemT;
}

// * NOTE: Component
export const MenuItem = ({item} : MenuItemPropsT) => {
    return (
      <>
        <p>{item.name}</p>
        <p className="font-black">{item.price}</p>
      </>
    )
}
