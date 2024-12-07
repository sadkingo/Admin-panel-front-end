// Todo get the data from the API
const menusData = [
    {
        id: 1, title: "Home", subMenus: [
            { id: 11, title: "Dashboard", icon: "tabler:category-filled", },
            {
                id: 12, title: "Menu Style", icon: "mage:filter-fill", subMenus: [
                    { id: 121, title: "test", icon: "", }
                ]
            },
        ]
    },
    {
        id: 2, title: "Pages", subMenus: [
            {
                id: 21, title: "Example", icon: "icon-park-solid:gamepad", subMenus: [
                    { id: 211, title: "test", icon: "", },
                    { id: 212, title: "test", icon: "", }
                ]
            },
            {
                id: 22, title: "Widgets", icon: "mdi:ticket", subMenus: [
                    { id: 221, title: "test", icon: "", }
                ]
            },
            {
                id: 23, title: "Maps", icon: "mdi:location", subMenus: [
                    { id: 231, title: "test", icon: "", }
                ]
            },
            {
                id: 24, title: "Authentication", icon: "solar:shield-check-bold", subMenus: [
                    { id: 241, title: "test", icon: "", }
                ]
            },
            {
                id: 25, title: "Users", icon: "fa-solid:users", subMenus: [
                    { id: 251, title: "test", icon: "", }
                ]
            },
            {
                id: 26, title: "Error 404", icon: "ic:baseline-error", subMenus: [
                    { id: 261, title: "test", icon: "", }
                ]
            },
            {
                id: 27, title: "Error 505", icon: "pajamas:warning-solid", subMenus: [
                    { id: 271, title: "test", icon: "", }
                ]
            },
            {
                id: 28, title: "Maintence", icon: "bi:bookmark-dash-fill", subMenus: [
                    { id: 281, title: "test", icon: "", }
                ]
            },
        ]
    },
    {
        id: 3, title: "Elements", subMenus: [
            {
                id: 31, title: "Components", icon: "solar:wallet-bold", subMenus: [
                    { id: 311, title: "test", icon: "", }
                ]
            },
            {
                id: 32, title: "Form", icon: "solar:document-bold", subMenus: [
                    { id: 321, title: "test", icon: "", }
                ]
            },
            {
                id: 33, title: "Table", icon: "fa6-solid:gear", subMenus: [
                    { id: 331, title: "test", icon: "", }
                ]
            },
            {
                id: 34, title: "Icons", icon: "bi:info-lg", subMenus: [
                    { id: 341, title: "test", icon: "", }
                ]
            },
        ]
    },
]
export { menusData }
