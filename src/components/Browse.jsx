"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";


const Browse = ({ayam}) => {

    // const data = useRef(
    //     fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
    //     .then((res) => res.json())
    //     .then((data) => data.data)
    // );
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
          .then((res) => res.json())
          .then((data) => {
            setData(data.data)
          })
      }, [])

    //   useEffect(() => {
    //     console.log(data)
    //   }, [data])

    
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

    // {data.map(data => {console.log(data.title)})}

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },

                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[]}
                className="mySwiper h-36 lg:h-56"
            >
                {" "}
                <div>
                    {data && data.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            {" "}
                            <a href={"/Movie"} className="absolute group overflow-hidden rounded-2xl">
                                <Image
                                    src={movie.images.jpg.image_url}
                                    width={1000}
                                    height={1000}
                                    className="object-cover h-36 w-full lg:h-56  lg:w-[250px]"
                                    alt=""
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black">
                                    <div className="px-2 pb-4">
                                        <div className="font-medium text-base text-white">
                                            {movie.title}
                                        </div>
                                        <p className="mb-0 text-gray-300 text-xs">
                                            {movie.genres.name}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-100 lg:group-hover:scale-125 opacity-0 group-hover:opacity-100
                             z-20 transition ease-in-out duration-500"
                                >
                                    <Image
                                        src="/icons/ic_play.svg"
                                        className=""
                                        width="50"
                                        height="50"
                                        alt=""
                                    />
                                </div>
                            </a>
                            <p>{movie.title}</p>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </>
    );
};

export default Browse;