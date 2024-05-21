import "./gastronomy.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { gastronomyKarnel } from "../../../api/gastronomyKarnel";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import paths from "../../../paths";

const Gastronomy = () => {
    const [arrGasCentral, setArrGasCentral] = useState([]);
    // console.log(arrGasCentral);
    const [arrGasSouth, setArrGasSouth] = useState([]);
    console.log(arrGasSouth);
    const [arrGasNorth, setArrGasNorth] = useState([]);
    // console.log(arrGasNorth);
    useEffect(() => {
        gastronomyKarnel
            .listGastronomyCentral()
            .then((res) => {
                // console.log(res);
                setArrGasCentral(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        gastronomyKarnel
            .listGastronomyNorth()
            .then((res) => {
                // console.log(res);
                setArrGasNorth(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        gastronomyKarnel
            .listGastronomySouth()
            .then((res) => {
                // console.log(res);
                setArrGasSouth(res.data);
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
        <div className="gastronomy__container">
            <div className="gastronomy__banner">
                <div className="gBanner__item">
                    <div className="gBanner__title">Gastronomy</div>
                    <hr className="mt-0 mb-4" />
                    <div className="gBanner__content">
                        <p className="text-white leading-6">
                            The Saigontourist restaurant system offers the most
                            exciting and authentic experiences with a great
                            variety of Vietnamese as well as world cuisines in
                            warm and cozy or airy and familiar memorable
                            atmospheres, providing guests with a wide selection
                            of restaurants and famous bars in different styles.
                        </p>
                    </div>
                </div>
            </div>
            <div className="gastronomy__item">
                {/* Gastronomy South */}
                <div className="gastronomy__region text-white text-3xl my-5 italic font-bold">
                    South
                </div>
                <div className="gitem__contain">
                    <Slider {...settings}>
                        {arrGasSouth.map((item, index) => {
                            return (
                                <div className="bg" key={index}>
                                    <div className="img">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={item.gasSouthImg}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="bg__content p-3">
                                        <div className="title text-[#686868] text-2xl mb-3 italic font-bold line-clamp-1">
                                            {item.gasSouthTitle}
                                        </div>
                                        <div className="address mb-3 flex">
                                            <i className="fa-solid fa-location-dot text-[#D6A022] "></i>
                                            <span className="line-clamp-1">
                                                {item.gasSouthAddress}
                                            </span>
                                        </div>
                                        <div className="phone mb-3">
                                            <i className="fa-solid fa-phone text-[#00396B]"></i>
                                            <span className="text-[#00396b]">
                                                {item.gasSouthPhone}
                                            </span>
                                        </div>
                                        <div className="link mb-5">
                                            <i className="fa-solid fa-globe text-[#00396B] "></i>
                                            <span className="text-[#00396b]">
                                                {item.gasSouthLink}
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
                {/* Gastromy Central */}
                <div className="gastronomy__region text-white text-3xl my-5 italic font-bold mt-28">
                    Central
                </div>
                <div className="gitem__contain">
                    <Slider {...settings}>
                        {arrGasCentral.map((item, index) => {
                            return (
                                <div className="bg" key={index}>
                                    <div className="img">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={item.gasCentralImg}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="bg__content p-3">
                                        <div className="title text-[#686868] text-2xl mb-3 italic font-bold line-clamp-1">
                                            {item.gasCentralTitle}
                                        </div>
                                        <div className="address mb-3 flex">
                                            <i className="fa-solid fa-location-dot text-[#D6A022] "></i>
                                            <span className="line-clamp-1">
                                                {item.gasCentralAddress}
                                            </span>
                                        </div>
                                        <div className="phone mb-3">
                                            <i className="fa-solid fa-phone text-[#00396B]"></i>
                                            <span className="text-[#00396b]">
                                                {item.gasCentralPhone}
                                            </span>
                                        </div>
                                        <div className="link mb-5">
                                            <i className="fa-solid fa-globe text-[#00396B] "></i>
                                            <span className="text-[#00396b]">
                                                {item.gasCentralLink}
                                            </span>
                                        </div>
                                        <div>
                                            <NavLink
                                                to={`${paths.GASTRONOMY}/central/${item.gasCentralId}`}
                                            >
                                                <button className="py-3 px-4 rounded-md bg-yellow-600 w-full text-white font-bold">
                                                    READ MORE
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                {/* Gastromy North */}
                <div className="gastronomy__region text-white text-3xl my-5 italic font-bold mt-28">
                    North
                </div>
                <div className="gitem__contain">
                    <Slider {...settings}>
                        {arrGasNorth.map((item, index) => {
                            return (
                                <div className="bg" key={index}>
                                    <div className="img">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={item.gasNorthImg}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="bg__content p-3">
                                        <div className="title text-[#686868] text-2xl mb-3 italic font-bold line-clamp-1">
                                            {item.gasNorthTitle}
                                        </div>
                                        <div className="address mb-3 flex">
                                            <i className="fa-solid fa-location-dot text-[#D6A022] "></i>
                                            <span className="line-clamp-1">
                                                {item.gasNorthAddress}
                                            </span>
                                        </div>
                                        <div className="phone mb-3">
                                            <i className="fa-solid fa-phone text-[#00396B]"></i>
                                            <span className="text-[#00396b]">
                                                {item.gasNorthPhone}
                                            </span>
                                        </div>
                                        <div className="link mb-5">
                                            <i className="fa-solid fa-globe text-[#00396B] "></i>
                                            <span className="text-[#00396b]">
                                                {item.gasNorthLink}
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
            </div>
        </div>
    );
};

export default Gastronomy;
