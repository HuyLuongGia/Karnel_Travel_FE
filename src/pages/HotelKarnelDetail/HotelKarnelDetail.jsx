import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hotelKarnel } from "../../api/hotelKarnel";
import "./hCDetail.scss";

const INIT_HOTEL_CENTRAL = {
    hcentralImg: "",
    hcentralTitle: "",
    hcentralAddress: "",
    hcentralPhone: "",
    hcentralLink: "",
    hcentralVideo: "",
};

const HotelKarnelDetail = () => {
    let { hotelId } = useParams();
    // console.log(hotelId);
    const [hotelDetailCentral, setHotelDetailCentral] =
        useState(INIT_HOTEL_CENTRAL);
    console.log(hotelDetailCentral);

    const getHotelCentralDetail = useCallback(() => {
        hotelKarnel
            .getHotelCentralDetail(hotelId)
            .then((res) => {
                // console.log(res);
                setHotelDetailCentral(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [hotelId]);

    useEffect(() => {
        getHotelCentralDetail();
    }, [getHotelCentralDetail, hotelId]);

    return (
        <div className="hCDetail__container">
            <div className="hCDetail__banner">
                <div className="hCDetail__banner__item">
                    <div className="hcDetail__title">Stay</div>
                    <hr className="mt-0 mb-4" />
                </div>
            </div>
            <div className="container-me relative mt-20">
                <div className="px-[10px] flex gap-3 pb-[10px]">
                    <div
                        className={`w-full grow basis-0 rounded-md overflow-hidden border-2 border-solid border-[#17305f] relative z-10 bg-cover bg-center md:min-h-[300px] lg:min-h-[460px]`}
                        // style={{
                        //     backgroundImage: `url('${hotelDetailCentral.hcentralImg}')`,
                        // }}
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={hotelDetailCentral.hcentralImg}
                            alt="img
                        "
                        />
                    </div>
                    <div className="grow-[2] basis-0 ml-7">
                        <div className="flex justify-between items-center">
                            <div className="my-3 font-semibold text-white text-[20px] max-w-[200px] md:my-5 sm:max-w-[unset] sm:text-[25px] pr-[40px] md:pr-0 leading-[150%]">
                                {hotelDetailCentral.hcentralTitle?.toUpperCase()}
                            </div>
                        </div>
                        <div className="flex gap-5 flex-col text-[#f58020] text-[16px] sm:text-[20px] sm:gap-10">
                            <div className="flex gap-5 items-center">
                                <div className="w-[25px] h-[25px] text-center leading-[25px]">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <p className="text-white">
                                    {hotelDetailCentral.hcentralAddress}
                                </p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="w-[25px] h-[25px] text-center leading-[25px]">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <p className="text-white">
                                    {hotelDetailCentral.hcentralPhone}
                                </p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="w-[25px] h-[25px] text-center leading-[25px]">
                                    <i className="fa-solid fa-globe"></i>
                                </div>

                                <p className="text-white">
                                    {hotelDetailCentral.hcentralLink}
                                </p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="w-[25px] h-[25px] text-center leading-[25px]">
                                    <i className="fa-solid fa-thumbs-up"></i>
                                </div>
                                <p className="text-white">88%</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="w-[25px] h-[25px] text-center leading-[25px]">
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="text-white">4.5</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-[10px] leading-[24px] mt-20">
                    <span className="text-[#31d7a9] italic text-xl">
                        A 4-star venue offers a level of service and comfort
                        designed to insure that both business and leisure
                        travelers who visit this emerging and bustling new
                        gateway city of Asia will find charming hospitality and
                        personalized service. Perfectly located right in the
                        heart of Ho Chi Minh City, Royal Hotel Saigon offers
                        easy access to government offices, major business
                        buildings, tourist attractions, shopping and
                        entertainment areas.
                    </span>
                    <div className="my-10">
                        <iframe
                            className="w-full h-96"
                            src={hotelDetailCentral.hcentralVideo}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                    <div>
                        <button className="py-3 px-4 w-full bg-yellow-500 rounded-md text-white mt-4 text-xl font-bold">
                            <span>Contact</span>
                            <span className="text-[#0a1e5e]">
                                <i className="fa-solid fa-phone ml-5"></i>
                                <span className="ml-1">
                                    {hotelDetailCentral.hcentralPhone}
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelKarnelDetail;
