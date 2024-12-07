import ButtonMenu from "./ButtonMenu.component";

function ButtonMenuContainer({ menu, index, isMenuActive }) {
    return (
        <ButtonMenu
            menu={menu}
            isMenuActive={isMenuActive}
            index={index}
        />
    )
}

export default ButtonMenuContainer;
