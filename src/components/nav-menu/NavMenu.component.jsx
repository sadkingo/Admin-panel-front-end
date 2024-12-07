import './NavMenu.style.css'

import React from 'react'
import { Icon } from '@iconify/react'

import Logo from '@components/logo'
import { SIDE_BAR_MARGIN } from '@configs/marginConst'
import { menusData } from './NavMenu.config'
import ButtonMenu from '@components/button-menu'

function NavMenu({ isMenuActive, setIsMenuActive }) {
    const sideBarStyleWidth = isMenuActive
        ? SIDE_BAR_MARGIN.OPENED
        : SIDE_BAR_MARGIN.CLOSED;

    document.documentElement.style.setProperty("--margin-side-menu-margin", sideBarStyleWidth);
    function handleMenuActiveChange() {
        setIsMenuActive(!isMenuActive);
    }

    return (
        <aside
            className={'side-menu' + (!isMenuActive ? " side-menu--closed" : "")}
            style={{ width: sideBarStyleWidth }}
        >
            {renderHeader()}
            {renderMenus()}
        </aside>
    )

    function renderHeader() {

        return (
            <div className='side-menu__header'>
                <button type='button'
                    onClick={() => handleMenuActiveChange()}
                    className={'header__slide-btn' + (isMenuActive ? " header__slide-btn--closed" : "")}
                >
                    <Icon icon="line-md:arrow-left" fontSize={18} />
                </button>
                <Logo scale={0.5} />
                <span className='side-menu-title'>Hope UI</span>
            </div>
        )
    }

    function renderMenus() {

        return (
            <div className="side-menu__content">
                {
                    menusData.map((menu, index) =>
                        <ButtonMenu key={menu.id} menu={menu} index={index} isMenuActive={isMenuActive} />
                    )
                }
            </div>
        )
    }
}

export default NavMenu;
