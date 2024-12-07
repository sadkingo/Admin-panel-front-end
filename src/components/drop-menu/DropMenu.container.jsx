import React, { useEffect, useRef, useState } from 'react'
import DropMenu from './DropMenu.component'

function DropMenuContainer({
    title,
    menuIcon,
    dropMenuItems,
    ...rest
}) {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const dropMenuRef = useRef(null);

    function handleActiveDropMenu() {
        setIsMenuActive(!isMenuActive);
    }

    // Event Listener to close when not focused
    useEffect(() => {
        const handleClickOutSide = function (e) {
            if (dropMenuRef && !dropMenuRef.current.contains(e.target)) {
                setIsMenuActive(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutSide)
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    }, [])

    return (
        <DropMenu
            title={title}
            menuIcon={menuIcon}
            dropMenuItems={dropMenuItems}
            options={rest}
            isMenuActive={isMenuActive}
            setIsMenuActive={setIsMenuActive}
            handleActiveDropMenu={handleActiveDropMenu}
            dropMenuRef={dropMenuRef}
        />
    )
}

export default DropMenuContainer;
