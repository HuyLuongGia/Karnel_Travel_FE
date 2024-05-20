import "./amusement.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { amusementKarnel } from "../../../api/amusementKarnel";
import { useState } from "react";

const Amusement = () => {
    const amuseImage = [
        "https://saigon-tourist.com/img/application/service/gallery-new/1.jpg",
        "https://saigon-tourist.com/img/application/service/gallery-new/10.jpg",
        "https://saigon-tourist.com/img/application/service/gallery-new/11.jpg",
        "https://saigon-tourist.com/img/application/service/gallery-new/3.jpg",
        "https://saigon-tourist.com/img/application/service/gallery-new/2.jpg",
        "https://saigon-tourist.com/img/application/service/gallery-new/6.jpg",
        "https://saigon-tourist.com/img/application/service/gallery-new/6.jpg",
        "https://saigon-tourist.com/img/application/service/gallery-new/4.jpg",
        "https://saigon-tourist.com/img/application/service/gallery-new/7.jpg",
    ];
    const [arrAmuse, setArrAmuse] = useState([]);
    console.log(arrAmuse);
    useEffect(() => {
        amusementKarnel
            .listAmuseKarnel()
            .then((res) => {
                // console.log(res);
                setArrAmuse(res.data);
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
        <div className="amusement__container">
            <div className="amusement__banner">
                <div className="amuseBanner__item">
                    <div className="amuseBanner__title">Amusement</div>
                    <hr className="mt-0 mb-4" />
                </div>
            </div>
            <div className="amusement__item">
                <div className="amuse__content">
                    <p>
                        With an available advantage in terms of resources as
                        well as the continuous effort to introduce customers to
                        top modern travel and entertainment services,
                        Saigontourist Group has been developing many recreation
                        service categories, including SCTV Cable TV Service
                        System, amusement parks (Dam Sen Cultural Park, Binh
                        Quoi Tourist Village, Ecotourism Area ...), Thu Duc Golf
                        Course, Saigon Exhibition and Convention Center (SECC)
                        and a system of prize-winning electronic game clubs.
                    </p>
                </div>
                <div className="amuse__img">
                    <div className="grid grid-cols-3 gap-3">
                        {amuseImage.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img
                                        className="w-full h-full object-cover"
                                        src={item}
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="amuse__item2">
                <div className="title text-white text-3xl italic font-bold mb-5">
                    UNIT MEMBER
                </div>
                <div className="amuseItem2__contain">
                    <Slider {...settings}>
                        {arrAmuse.map((item, index) => {
                            return (
                                <div className="bg" key={index}>
                                    <div className="img">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={item.amuseImg}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="bg__content p-3">
                                        <div className="title text-[#686868] text-2xl mb-3 italic font-bold line-clamp-1">
                                            {item.amuseTitle}
                                        </div>
                                        <div className="address mb-5 flex">
                                            <i className="fa-solid fa-location-dot text-[#D6A022] "></i>
                                            <span className="line-clamp-1">
                                                {item.amuseAddress}
                                            </span>
                                        </div>
                                        <div className="phone mb-3">
                                            <i className="fa-solid fa-phone text-[#00396B]"></i>
                                            <span className="text-[#00396b]">
                                                {item.amusePhone}
                                            </span>
                                        </div>
                                        <br />
                                        <div className="link mb-5 ">
                                            <i className="fa-solid fa-globe text-[#00396B] "></i>
                                            <span className="text-[#00396b]">
                                                {item.amuseLink}
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

export default Amusement;
