const BottomBar = ({isActive}) => {
    const Item = [{icon: <i className="bx bxs-home"></i>, text: 'Home', link: '/Home'},
    {icon: <i className="bx bxs-wallet"></i>, text: 'Payments', link: '/Payments'},
    {icon: <i className="bx bxs-chat"></i>, text: 'Chats', link: '/Chats'},]

    return(
          <div>
            <div className="fixed bottom-0 w-full bg-[#35383F] z-10 lg:hidden">
                <div className="flex justify-around py-3">
                    {Item.map((item, index) => (
                        <a href={item.link} className="flex flex-col items-center" key={index}>
                            <span className="text-green-500">
                                {item.icon}
                            </span>
                            <p className="text-sm text-white">{item.text}</p>
                        </a>
                    ))}
                </div>
            </div>
          </div>
    )

}

export default BottomBar;