import { useEffect, useState } from "react";
import "./travel.scss";
import { travelKarnel } from "../../../api/travelKarnel";

const Travel = () => {
    const [arrTravelImg, setArrTravelImg] = useState([]);
    // console.log(arrTravelImg);
    const [arrTravelContact, setArrTravelContact] = useState([]);
    console.log(arrTravelContact);
    useEffect(() => {
        travelKarnel
            .listTravelImage()
            .then((res) => {
                // console.log(res);
                setArrTravelImg(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        travelKarnel
            .listTravelContact()
            .then((res) => {
                // console.log(res);
                setArrTravelContact(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="travelKarnel__container">
            <div className="travel__banner">
                <div className="tBanner__item">
                    <div className="tBanner__title">Travel</div>
                    <hr />
                </div>
            </div>
            <div className="travel__item">
                <div className="travel__content">
                    <p className="text-white text-xl">
                        <span className="italic text-yellow-500">
                            Karnel Travel
                        </span>{" "}
                        &nbsp;has many units operating in the field of travel,
                        especially Karnel Travel Service Company
                        &#10088;referred to as Karnel Travel&#10089;, which is
                        currently both the leading and only travel agency in
                        Vietnam that operates business effectively in all 3
                        fields, including international tourism, foreign travel,
                        and domestic tourism. With the aim of bringing new and
                        exciting experiences to travelers, Karnel Travel always
                        cooperates with leading industry partners to provide
                        customers with innovative and safe travel experiences
                        with the best quality of service.
                        <p className="mt-4">
                            <span className="italic text-yellow-500">
                                Karnel Travel
                            </span>{" "}
                            &nbsp;is headquartered in Ho Chi Minh City and has
                            18 branches stretching across Vietnam. Cruise travel
                            is also attracting a large number of international
                            tourists at Karnel Travel, with hundreds of
                            thousands of multinational tourists visiting Vietnam
                            each year.
                        </p>
                    </p>
                </div>
                <div className="travel__img mt-20">
                    <div className="grid grid-cols-3 gap-2">
                        {arrTravelImg.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img
                                        className="w-full h-full object-cover"
                                        src={item.travelImg}
                                        alt="img"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="travel__contact mt-32">
                    {arrTravelContact.map((item, index) => {
                        return (
                            <div
                                className="tContact__item flex items-end mt-16"
                                key={index}
                            >
                                <div className="tContact__img">
                                    <img src={item.travelIcon} alt="img" />
                                </div>
                                <div className="tContact__content ml-10">
                                    <div className="content__title italic text-yellow-500 text-xl">
                                        {item.travelTitle}
                                    </div>
                                    <div className="content__address my-5">
                                        <i className="fa-solid fa-location-dot text-[#D6A022] "></i>
                                        <span className="text-white ml-2">
                                            {item.travelAddress}
                                        </span>
                                    </div>
                                    <div className="content__phone">
                                        <i className="fa-solid fa-phone text-[#00396B]"></i>
                                        <span className="ml-2">{item.travelPhone}</span>
                                    </div>
                                    <div>
                                        <button className="py-3 px-4 rounded-md bg-yellow-600 text-white font-bold mt-8 w-2/3">
                                            READ MORE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Travel;
