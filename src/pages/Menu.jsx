import "../styles/Menu.css";
import { MenuList } from "../utils/MenuList";
import { MenuItem } from "../components/MenuItem";

export function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return <MenuItem key={key} {...menuItem} />;
        })}
      </div>
    </div>
  );
}
