"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App({}) {

    const movies = [
        { id: 1, title: 'Kimetsu No Yaiba', poster: 'kny.jpg', genre: 'Action, Martial Arts, Adventure',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis praesentium reprehenderit libero perspiciatis non consectetur....', rating: "9.3" },
        { id: 2, title: 'Attack On Titan', poster: 'aot.jpg', genre: 'Action, Martial Arts, Adventure',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis praesentium reprehenderit libero perspiciatis non consectetur....', rating: "9.3"},
        { id: 3, title: 'Cyberpunk Edgerunner', poster: 'cb2.png', genre: 'Action, Martial Arts, Adventure',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis praesentium reprehenderit libero perspiciatis non consectetur....', rating: "9.3"},
        { id: 3, title: 'Spy X Family', poster: 'spy.jpg', genre: 'Comedy, action, family',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis praesentium reprehenderit libero perspiciatis non consectetur....', rating: "9.3"},
        { id: 3, title: 'Jujitsu Kaisen', poster: 'jujitsu.jpeg', genre: 'Action, Martial Arts, Adventure',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis praesentium reprehenderit libero perspiciatis non consectetur....', rating: "9.3"},
        { id: 3, title: 'Kaguya Sama : Love Is War', poster: 'kaguya.jpg', genre: 'Drama, Romance, Comedy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis praesentium reprehenderit libero perspiciatis non consectetur....', rating: "9.3"},
        { id: 3, title: 'My Dress-up Darling', poster: 'darling.jpg', genre: 'Drama, Romance, Comedy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis praesentium reprehenderit libero perspiciatis non consectetur....', rating: "9.3"},
    ];
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <div>
                    {movies.map((movie) => (
                        <SwiperSlide key={movie}>
                            {" "}
                            <Image
                                src={"/dummyMovie/" + movie.poster}
                                width={1000}
                                height={1000}
                                alt=""
                                className="absolute h-full -z-10 w-full object-cover rounded-2xl"
                            />
                            <div className="relative bg-black bg-opacity-40 pt-44 px-5 pb-4 lg:px-20 lg:py-28 rounded-2xl">
                                <h1 className="text-2xl font-bold md:text-3xl text-slate-100">
                                    {movie.title}
                                </h1>
                                <p className="text-sm md:text-base text-slate-300">
                                    {movie.genre}
                                </p>
                                <div className="flex mt-2">
                                    <button className="flex bg-green-500 text-white py-1 px-4 rounded-full mr-5">
                                        <span className="self-center">
                                            <i className="bx bx-play"></i>
                                        </span>
                                        <p className="self-center">Play</p>
                                    </button>
                                    <button className="flex bg-transparent border-2 border-white text-white py-1 px-4 rounded-full">
                                        <span>
                                            <i className="bx bx-plus"></i>
                                        </span>
                                        <p>My List</p>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </>
    );
}