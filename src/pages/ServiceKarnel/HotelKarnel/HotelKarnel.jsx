import "./hotelKarnel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { hotelKarnel } from "../../../api/hotelKarnel";
import { useState } from "react";
const HotelKarnel = () => {
    const [arrHotelSouth, setArrHotelSouth] = useState([]);
    // console.log(arrHotelSouth);
    const [arrHotelCenter, setArrHotelCenter] = useState([]);
    // console.log(arrHotelCenter);
    const [arrHotelNorth, setArrHotelNorth] = useState([]);
    console.log(arrHotelNorth);

    useEffect(() => {
        // Api Hotel
        hotelKarnel
            .listHotelSouth()
            .then((res) => {
                // console.log(res);
                setArrHotelSouth(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        hotelKarnel
            .listHotelCenter()
            .then((res) => {
                // console.log(res);
                setArrHotelCenter(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        hotelKarnel
            .listHotelNorth()
            .then((res) => {
                // console.log(res);
                setArrHotelNorth(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // Custome Arrow React Slick
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={style} onClick={onClick}>
                <i className="fa-solid fa-angle-left"></i>
            </div>
        );
    };
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={style} onClick={onClick}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
        );
    };

    // Setting Lib React Slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className="hotel__container">
            <div className="hotel__banner">
                <div className="hBanner__item">
                    <div className="hBanner__title ">Hotels and resorts</div>
                    <hr className="mt-0 mb-4" />
                    <div className="hBanner__content">
                        <p className="text-white leading-6">
                            Saigontourist Hotels & Resorts welcomes travelers
                            with more than 50 hotels spread throughout Vietnam.
                            Wherever you go, whether you are travelling for
                            business or leisure, Saigontourist Group will always
                            be there to welcome and serve you with friendly
                            service, thoughtful amenities, and an array of
                            options for the everyday traveler.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hotel__item">
                {/* Hotel South */}
                <div className="hotel__region text-white text-3xl my-5 italic font-bold">
                    South
                </div>
                <div className="hitem__contain">
                    <Slider {...settings}>
                        {arrHotelSouth.map((item, index) => {
                            return (
                                <div className="bg" key={index}>
                                    <div className="img">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={item.hsouthImg}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="bg__content p-3">
                                        <div className="title text-[#686868] text-2xl mb-3 italic font-bold line-clamp-1">
                                            {item.hsouthTitle}
                                        </div>
                                        <div className="address mb-3 flex">
                                            <i className="fa-solid fa-location-dot text-[#D6A022] "></i>
                                            <span className="line-clamp-1">
                                                {item.hsouthAddress}
                                            </span>
                                        </div>
                                        <div className="phone mb-3">
                                            <i className="fa-solid fa-phone text-[#00396B]"></i>
                                            <span className="text-[#00396b]">
                                                {item.hsouthPhone}
                                            </span>
                                        </div>
                                        <div className="link mb-5">
                                            <i className="fa-solid fa-globe text-[#00396B] "></i>
                                            <span className="text-[#00396b]">
                                                {item.hsouthLink}
                                            </span>
                                        </div>
                                        <div>
                                            <button className="py-3 px-4 rounded-md bg-yellow-600 w-full text-white font-bold">
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                {/* Hotel Central */}
                <div className="hotel__region text-white text-3xl my-5 italic font-bold mt-28">
                    Central
                </div>
                <div className="hitem__contain">
                    <Slider {...settings}>
                        {arrHotelCenter.map((item, index) => {
                            return (
                                <div className="bg" key={index}>
                                    <div className="img">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={item.hcentralImg}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="bg__content p-3">
                                        <div className="title text-[#686868] text-2xl mb-3 italic font-bold line-clamp-1">
                                            {item.hcentralTitle}
                                        </div>
                                        <div className="address mb-3 flex">
                                            <i className="fa-solid fa-location-dot text-[#D6A022] "></i>
                                            <span className="line-clamp-1">
                                                {item.hcentralAddress}
                                            </span>
                                        </div>
                                        <div className="phone mb-3">
                                            <i className="fa-solid fa-phone text-[#00396B]"></i>
                                            <span className="text-[#00396b]">
                                                {item.hcentralPhone}
                                            </span>
                                        </div>
                                        <div className="link mb-5">
                                            <i className="fa-solid fa-globe text-[#00396B] "></i>
                                            <span className="text-[#00396b]">
                                                {item.hcentralLink}
                                            </span>
                                        </div>
                                        <div className="btn">
                                            <button className="py-3 px-4 rounded-md bg-yellow-600 w-full text-white font-bold">
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                {/* Hotel North */}
                <div className="hotel__region text-white text-3xl my-5 italic font-bold mt-28">
                    North
                </div>
                <div className="hitem__contain">
                    <Slider {...settings}>
                        {arrHotelNorth.map((item, index) => {
                            return (
                                <div className="bg" key={index}>
                                    <div className="img">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={item.hnorthImg}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="bg__content p-3">
                                        <div className="title text-[#686868] text-2xl mb-3 italic font-bold line-clamp-1">
                                            {item.hnorthTitle}
                                        </div>
                                        <div className="address mb-3 flex">
                                            <i className="fa-solid fa-location-dot text-[#D6A022] "></i>
                                            <span className="line-clamp-1">
                                                {item.hnorthAddress}
                                            </span>
                                        </div>
                                        <div className="phone mb-3">
                                            <i className="fa-solid fa-phone text-[#00396B]"></i>
                                            <span className="text-[#00396b]">
                                                {item.hnorthPhone}
                                            </span>
                                        </div>
                                        <div className="link mb-5">
                                            <i className="fa-solid fa-globe text-[#00396B] "></i>
                                            <span className="text-[#00396b]">
                                                {item.hnorthLink}
                                            </span>
                                        </div>
                                        <div className="btn">
                                            <button className="py-3 px-4 rounded-md bg-yellow-600 w-full text-white font-bold">
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default HotelKarnel;
