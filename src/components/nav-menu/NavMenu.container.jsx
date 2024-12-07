import { useState } from "react";

import NavMenu from "./NavMenu.component";

function NavMenuContainer() {
    const [isMenuActive, setIsMenuActive] = useState(true);

    return (
        <NavMenu
            isMenuActive={isMenuActive}
            setIsMenuActive={setIsMenuActive}
        />
    )
}

export default NavMenuContainer;
