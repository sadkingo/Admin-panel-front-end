import './dropMenu.style.css';
import { Icon } from '@iconify/react'

function DropMenu({
    title,
    menuIcon,
    dropMenuItems,
    options,
    isMenuActive,
    setIsMenuActive,
    handleActiveDropMenu,
    dropMenuRef,
}) {

    return (
        <div
            className={`drop-menu ${isMenuActive ? "active" : ""}`}
            ref={dropMenuRef}
        >
            <button
                onClick={() => handleActiveDropMenu()}
                type="button"
            >
                <Icon icon={menuIcon} {...options} />
            </button>
            <ul className='drop-list'>
                {renderTitle(title)}
                {dropMenuItems.map(renderDropMenuItem)}
            </ul>
        </div>
    )

    function renderTitle(title) {
        if (!title) return;
        return (<div className='drop-list__title'>
            {title}
        </div>
        )
    }
    function renderDropMenuItem(menuItem) {
        return (
            <li key={menuItem.id} className='drop-list__item'>
                {menuItem.item}
            </li>
        )
    }
}

export default DropMenu;
