"use client";
import Head from "next/head";
import { NextPage } from "next";
// import Page from "./page.js";
import BasicLayout from "../../Layouts/BasicLayout";
import Page from "../page1";


const Index = () => {
  // return (
  //     <HomeLayout home={true} pageName={"Websekai"}>
  //         <SwiperC />
  //         <div className="my-2 px-3">
  //             <div className="flex mb-3 justify-between text-green-500">
  //                 <p>Anime Baru</p>
  //                 <a href="#">selengkapnya..</a>
  //             </div>
  //             <Browse />
  //         </div>
  //         <div className="px-3">
  //             <div className="flex mb-3 justify-between text-green-500">
  //                 <p>Anime Baru</p>
  //                 <a href="#">selengkapnya..</a>
  //             </div>
  //             <Browse />
  //         </div>
  //     </HomeLayout>
  // );
  return (
    <>
      <Head>
        <title>Websekai-Favourite</title>
        <meta name="description" content="Generated by Create Next Stack." />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </Head>

      <BasicLayout 
            home={true}
            pageName={'Favourites'}
            link={'/Favourites'}
            anak={<div><Page /></div>}
            
          ></BasicLayout>
    </>
  );
};

export default Index;