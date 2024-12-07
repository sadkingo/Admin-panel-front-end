import { useState } from "react";

import ButtonSubMenu from "@components/button-sub-menu";

function ButtonMenu({ menu, index, isMenuActive }) {
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

    function handleMenuSelect(index) {
        setSelectedMenuIndex(index)
    }

    return (
        <div
            onFocus={() => { handleMenuSelect(index) }}
            className={`side-menu__section sub-menu ${index === selectedMenuIndex ? "selected" : ""}`}>
            <div className="sub-menu__title" > {isMenuActive ? menu.title : "-"}</div>
            <div className='sub-menu__menu-group'>
                <ButtonSubMenu menu={menu.subMenus} />
            </div>
        </div>
    )
}
export default ButtonMenu;
