import { Icon } from '@iconify/react';
import React, { useState } from 'react'

function ButtonSubMenu({ menuElem }) {
    const [selectedMenuSubIndex, setSelectedMenuSubIndex] = useState(menuElem.map(() => false));

    function handleSelect(index) {
        const selectedIndex = (index === selectedMenuSubIndex) ? -1 : index

        setSelectedMenuSubIndex(selectedIndex);
    };

    return (
        menuElem.map((menu, index) => (
            <div className={`menu-group${selectedMenuSubIndex === index ? " selected" : ""}`} key={menu.id}>
                {renderSubMenu(menu, index)}
                {renderSubSubMenu(menu, index)}
            </div>
        ))
    )

    function renderMenuTitle(menu) {
        return (
            <div className='menu-group__menu--title'>
                {
                    menu.icon ? <Icon icon={menu.icon} width={28} textAnchor='left' /> : ""
                }
                <span >{menu.title}</span>
            </div>
        )
    }

    function renderMenuIcon(menu, index) {
        return (<>
            {menu.subMenus &&
                (<Icon icon="weui:arrow-filled"
                    className={selectedMenuSubIndex === index ? "active" : ""}
                />)}
        </>
        )
    }

    function renderSubMenu(menu, index) {
        return (
            <button
                className={`menu-group__menu${selectedMenuSubIndex === index ? " selected" : ""}`}
                onClick={() => handleSelect(index)}>
                {renderMenuTitle(menu)}
                {renderMenuIcon(menu, index)}
            </button>
        )
    }

    function renderSubSubMenu(menu, index) {
        return (
            <React.Fragment>
                {menu.subMenus &&
                    (
                        <div className='menu-group__sub-menu'>
                            <ButtonSubMenu menuElem={menu.subMenus} />
                        </div>
                    )}
            </React.Fragment>
        )
    }
}

export default ButtonSubMenu;
