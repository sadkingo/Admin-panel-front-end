import "./navBar.style.css";

import { Icon } from "@iconify/react";

import DropMenu from "@components/drop-menu";

function Header({
    dropMenusData,
    profileMenuData
}) {

    return (
        <ul className="nav-menu">
            <li className="nav-menu__item">
                {renderSearchForm()}
            </li>
            <div className="nav-menu__group">
                {dropMenusData.map(renderDropMenu)}
                {renderProfileDropMenu()}
            </div>
        </ul>
    )

    function renderProfileDropMenu() {
        return (
            <div className="profile-menu">
                <li className="nav-menu__item nav-menu__profile-pic">
                    {renderDropMenus()}
                </li>
                {renderUserInfo()}
            </div>
        )
    }

    function renderDropMenus() {
        return (
            <DropMenu
                menuIcon={profileMenuData.icon}
                dropMenuItems={profileMenuData.items}
                height={profileMenuData.size}
            />
        )
    }

    function renderUserInfo() {
        return (
            <li className="nav-menu__item profile-name-role">
                <p className="profile-name-role__name">Sadkingo</p>
                <p className="profile-name-role__role">Web Developer</p>
            </li>
        )
    }

    function renderSearchForm() {

        return (
            <form className="search-form" action="#">
                <button type="submit">
                    <Icon icon="si:search-duotone" width={24} color="var(--color-subtitle)" />
                </button>
                {renderSearchInput()}
            </form>
        )
    }

    function renderSearchInput() {
        return (
            <input
                className="search-input"
                name="search"
                id="search"
                type="text"
                placeholder={"Search..."} />
        )
    }

    function renderDropMenu(menu, index) {
        return (
            <li key={index} className="nav-menu__item">
                <DropMenu
                    title={menu.title}
                    menuIcon={menu.icon}
                    dropMenuItems={menu.items}
                    height={"85%"}
                />
            </li>
        )
    }
}

export default Header;
