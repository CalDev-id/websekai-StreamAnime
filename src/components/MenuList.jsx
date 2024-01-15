const UserMenu = [
    {
        link: '/Home',
        icon: (<i className="bx bxs-home"></i>),
        text: 'Discover',

    },
    {
        link: '/Favourites',
        icon: (<i className="bx bxs-heart"></i>),
        text: 'Your Favourite',

    },
    {
        link: null,
        icon: (<i className="bx bxs-download"></i>),
        text: 'Downloads',

    },
    {
        link: "/Chats",
        icon: (<i className="bx bxs-chat"></i>),
        text: 'Messages (102)',

    },
];

const UserOthers = [
    {
        link: "/Payments",
        icon: (<i className="bx bxs-wallet"></i>),
        text: 'Payments',

    },
    {
        link: null,
        icon: (<i className="bx bxs-bar-chart-square"></i>),
        text: 'Analytics',

    },
    {
        link: null,
        icon: (<i className="bx bxs-user"></i>),
        text: 'Your Profile',

    },
    {
        link: "/",
        icon: (<i className="bx bx-log-out"></i>),
        text: 'Logout',
    },
];

export { UserMenu, UserOthers };