import { useEffect, useState } from "react";
import "./banner.scss";
import { homePageKarnel } from "../../api/homePageKarnel";
import { Carousel } from "antd";
import "animate.css";

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

const Banner = () => {
    const [arrBanner, setArrBanner] = useState([]);
    console.log(arrBanner);
    const [arrSerChoose, setArrSerChoose] = useState([]);
    console.log(arrSerChoose);
    useEffect(() => {
        // Api HomePage banner
        homePageKarnel
            .listBanner()
            .then((res) => {
                // console.log(res.data);
                setArrBanner(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="banner__container">
            {/*  */}
            <Carousel
                autoplay
                autoplaySpeed={3000}
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
                arrows={true}
            >
                {arrBanner.map((item, index) => {
                    return (
                        <div className="banner__carousel" key={index}>
                            <img src={item?.bannerImg} alt="img" />
                            <div className="banner__content container animate__animated animate__fadeInUp">
                                <p className="banner__date">
                                    {item?.bannerDate}
                                </p>
                                <h2 className="banner__name italic text-2xl font-semibold my-2">
                                    {item?.bannerTitle}
                                </h2>
                                <p className="banner__text">
                                    {item?.bannerContent}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Banner;
