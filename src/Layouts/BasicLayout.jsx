"use client";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useState } from "react";
import Chat from "../components/Chat";

const HomeLayout = ({ anak, home, pageName, auth, link}) => {
    const [sidebarOn, setSidebarOn] = useState(false);
    return (
            <section className="lg:flex bg-[#181A20] z-10">
                <div className="lg:w-[20%] 2xl:w-[15%]">
                    <Sidebar
                        auth={auth}
                        sidebarOn={sidebarOn}
                        setSidebarOn={setSidebarOn}
                        name={"Weebs"}
                        link={link}
                    />
                </div>

                <section className="lg:w-[80%] lg:px-10 2xl:w-[85%]">
                    <Topbar
                        home={home}
                        pageName={pageName}
                        setSidebarOn={setSidebarOn}
                        name={"Weebs"}
                    />
                    <div className="xl:flex">
                        <div className="2xl:w-3/4 xl:w-full">
                            <main>{anak}</main>
                        </div>

                        <div className="2xl:w-1/4 hidden 2xl:block pl-10 2xl:px-10">
                            <Chat />
                        </div>
                    </div>
                </section>
            </section>
    );
};

export default HomeLayout;