import { NavLink, useParams } from "react-router-dom";
import "./gasCentralDetail.scss";
import { useCallback, useEffect, useState } from "react";
import { gastronomyKarnel } from "../../../api/gastronomyKarnel";
import paths from "../../../paths";

const INIT_GASTRONOMY_CENTRAL = {
    gasCentralImg: "",
    gasCentralTitle: "",
    gasCentralAddress: "",
    gasCentralPhone: "",
    gasCentralLink: "",
    hsouthVideo: "",
};

const GasCentralDetail = () => {
    let { gasId } = useParams();
    // console.log(gasId);
    const [gasDetailCentral, setGasDetailCentral] = useState(
        INIT_GASTRONOMY_CENTRAL
    );
    console.log(gasDetailCentral);

    const getGasCentralDetail = useCallback(() => {
        gastronomyKarnel
            .getGastronomyCentralDetail(gasId)
            .then((res) => {
                // console.log(res);
                setGasDetailCentral(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [gasId]);

    useEffect(() => {
        getGasCentralDetail();
    }, [getGasCentralDetail, gasId]);

    return (
        <div className="gasCDetail__container">
            <div className="gasCDetail__banner">
                <div className="gasSDetail__banner__item">
                    <div className="gasSDetail__title">Gastronomy</div>
                    <hr className="mt-0 mb-4" />
                </div>
            </div>
            <div className="container-me relative mt-20">
                <div className="px-[10px] flex gap-3 pb-[10px]">
                    <div
                        className={`w-full grow basis-0 rounded-md overflow-hidden border-2 border-solid border-[#17305f] relative z-10 bg-cover bg-center md:min-h-[300px] lg:min-h-[450px]`}
                        // style={{
                        //     backgroundImage: `url('${hotelDetailCentral.hcentralImg}')`,
                        // }}
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={gasDetailCentral.gasCentralImg}
                            alt="img
                        "
                        />
                    </div>
                    <div className="grow-[2] basis-0 ml-7">
                        <div className="flex justify-between items-center">
                            <div className="my-3 font-semibold text-white text-[20px] max-w-[200px] md:my-5 sm:max-w-[unset] sm:text-[25px] pr-[40px] md:pr-0 leading-[150%]">
                                {gasDetailCentral.gasCentralTitle.toUpperCase()}
                            </div>
                        </div>
                        <div className="flex gap-5 flex-col text-[#f58020] text-[16px] sm:text-[20px] sm:gap-10">
                            <div className="flex gap-5 items-center">
                                <div className="w-[25px] h-[25px] text-center leading-[25px]">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <p className="text-white">
                                    {gasDetailCentral.gasCentralAddress}
                                </p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="w-[25px] h-[25px] text-center leading-[25px]">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <p className="text-white">
                                    {gasDetailCentral.gasCentralPhone}
                                </p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="w-[25px] h-[25px] text-center leading-[25px]">
                                    <i className="fa-solid fa-globe"></i>
                                </div>

                                <p className="text-white">
                                    {gasDetailCentral.gasCentralLink}
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

                    <div>
                        <button className="py-3 px-4 w-full bg-yellow-500 rounded-md text-white mt-5 text-xl font-bold">
                            <span>Contact</span>
                            <span className="text-[#0a1e5e]">
                                <i className="fa-solid fa-phone ml-5"></i>
                                <span className="ml-1">
                                    {gasDetailCentral.gasCentralPhone}
                                </span>
                            </span>
                        </button>
                    </div>
                    <div>
                        <NavLink to={paths.PAYMENT}>
                            <button className="py-3 px-4 w-full bg-orange-500 rounded-md text-white mt-9 text-xl font-bold">
                                Booking Now
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GasCentralDetail;
