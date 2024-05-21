import "./aboutUsHp.scss";
import image from "../../../assets/img/HomeAboutUs.png";
import { NavLink } from "react-router-dom";
import paths from "../../../paths";
const AboutUsHp = () => {
    return (
        <div className="flex aboutUs__container gap-4">
            <div className="col aboutUs__content">
                <h3 className="title">About Us</h3>
                <hr className="mt-2 mb-4" />
                <p className="leading-7 text-lg font-light text-gray-400">
                    &#34; <b>Karnel Group</b> always blends local cultural
                    values into each of their business activities, creating the
                    unique brand that is Saigontourist&#8217;s value chain with
                    the aim of promoting the image of Vietnam&#8217;s tourism to
                    international friends, contributing our part to make tourism
                    in Vietnam a spearhead economic sector in the country. Our
                    business philosophy is the driving force behind the unified
                    direction of Saigontourist Group, with the goal of always
                    benefiting society and the community to develop economic as
                    well as spiritual and humanistic values. &#34;
                </p>
                <NavLink to={paths.ABOUT_KARNEL}>
                    <button className="mt-4">LEARN MORE</button>
                </NavLink>
            </div>
            <div className="aboutUs__img col">
                <img className="h-100" src={image} alt="image" />
            </div>
        </div>
    );
};

export default AboutUsHp;
