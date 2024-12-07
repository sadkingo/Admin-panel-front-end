import { Icon } from "@iconify/react"
import Header from "./Header.component"

function HeaderContainer() {

    return (
        <Header
            dropMenusData={dropMenusData}
            profileMenuData={profileMenuData}
        ></Header>
    );


}

//TODO remake it in the API
const dropMenusData = [{
    title: null,
    icon: "emojione:flag-for-united-kingdom",
    size: "90%",
    items: [
        { id: 1, item: renderDropDownItems("twemoji:flag-algeria", "Arabic") },
        { id: 2, item: renderDropDownItems("twemoji:flag-spain", "Spanish") },
        { id: 3, item: renderDropDownItems("twemoji:flag-germany", "German") },
    ]
},
{
    title: "Notifications",
    icon: "solar:bell-bold-duotone",
    size: "85%",
    items: [
        { id: 1, item: renderDropDownItems("mage:box-3d-notification-fill", "Your password has ben changed") },
        { id: 2, item: renderDropDownItems("mage:box-3d-notification-fill", "Spanish") },
        { id: 3, item: renderDropDownItems("mage:box-3d-notification-fill", "German") },
    ]
},
{
    title: "Messages",
    icon: "lets-icons:message-alt-duotone",
    size: "85%",
    items: [
        { id: 1, item: renderDropDownItems("iconoir:message-solid", "Your password has ben changed") },
        { id: 2, item: renderDropDownItems("iconoir:message-solid", "Message have ben received from sadking.") },
        { id: 3, item: renderDropDownItems("iconoir:message-solid", "Lorem ipsum dolor sit amet consectetur adipisicing elit.") },
    ]
},
]
const profileMenuData = {
    title: null,
    icon: "fluent-emoji-flat:man-mage",
    size: "100%",
    items: [
        { id: 1, item: renderDropDownItems("", "Profile") },
        { id: 2, item: renderDropDownItems("", "LogOut") },
    ]
}

function renderDropDownItems(icon, text) {
    return (<>
        <Icon height={30} icon={icon} />
        <span>{text}</span>
    </>)
}

export default HeaderContainer;
