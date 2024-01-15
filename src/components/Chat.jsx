import { useState } from "react";
import Image from "next/image";

const Chat = () => {
    const [showChat, setShowChat] = useState(true);

    return (
        <>
            <div
                onClick={() => {
                    setShowChat(!showChat);
                }}
                className="flex text-white font-bold justify-between mb-3 bg-[#35383F] p-3 rounded-lg"
            >
                <p>Recent Chat</p>
                <p className="text-green-500 font-normal">
                    <i className="bx bxs-chat"></i>
                </p>
            </div>

            <div
                className={
                    showChat
                        ? "bg-[#35383F] p-3 rounded-lg h-fit relative flex flex-col"
                        : "hidden"
                }
            >
                <ul>
                    <li>
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <Image alt="chat" width={300} height={300} src="/icons/animemerah.jpg" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Agus Rendang
                                <time className="text-xs opacity-50 px-2">
                                    2 hours ago
                                </time>
                            </div>
                            <div className="chat-bubble">Genre NTR min</div>
                        </div>
                    </li>
                    <li>
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <Image alt="chat" width={300} height={300} src="/Images/websekai-logo.jpg" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Admin Websekai
                                <time className="text-xs opacity-50 px-2">
                                    2 hours ago
                                </time>
                            </div>
                            <div className="chat-bubble">
                            Skip, Tim vanilla
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <Image alt="chat" width={300} height={300} src="/icons/animebiru.jpg" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Nibras Sumedang
                                <time className="text-xs opacity-50 px-2">
                                    2 hours ago
                                </time>
                            </div>
                            <div className="chat-bubble">
                                Genre Milf bang
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <Image alt="chat" width={300} height={300} src="/Images/websekai-logo.jpg" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Agus Rendang
                                <time className="text-xs opacity-50 px-2">
                                    2 hours ago
                                </time>
                            </div>
                            <div className="chat-bubble">
                                Loli Pride
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="flex py-2">
                    <input
                        type="text"
                        placeholder="Type here to send a message"
                        className="input input-bordered input-success w-full max-w-xs border-green-500 text-slate-400 h-9 text-sm"
                    />
                    <span className="text-3xl px-3 self-center text-green-500">
                        <i className="bx bxs-send"></i>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Chat;