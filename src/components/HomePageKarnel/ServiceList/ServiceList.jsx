import { useEffect, useState } from "react";
import "./serviceList.scss";
import { homePageKarnel } from "../../../api/homePageKarnel";
import { NavLink } from "react-router-dom";

const ServiceList = () => {
    const path = ["hotel", "travel", "gastronomy", "amusement"];
    const [servChoose, setServChoose] = useState([]);
    // console.log(servChoose);
    useEffect(() => {
        // Api service choose
        homePageKarnel
            .listServChoose()
            .then((res) => {
                // console.log(res.data);
                setServChoose(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="grid grid-cols-4 serviceList__container gap-4 mx-4 mt-4">
            {servChoose.map((item, index) => {
                return (
                    <div key={index}>
                        <NavLink to={path[index]}>
                            <div>
                                <img
                                    className="w-full object-cover"
                                    src={item.serviceImg}
                                    alt="img"
                                />
                                <p className="serList__content">
                                    {item.serviceContent}
                                </p>
                            </div>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
};

export default ServiceList;
