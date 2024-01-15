"use client";

import React from 'react';
import BasicLayout from "../../Layouts/BasicLayout";
import Chat from "../../components/Chat";

const ChatsPage = ({ auth }) => {
    return (
        <BasicLayout home={true} pageName={"Chats"} link={'/Chats'} anak={            <div className="pt-20 h-screen px-5">
        <Chat />
    </div>}>


        </BasicLayout>
    );
};

export default ChatsPage;