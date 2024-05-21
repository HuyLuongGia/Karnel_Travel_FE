import { NavLink } from "react-router-dom";
import "./newsKarnel.scss";
import paths from "../../../paths";

const NewsKarnel = () => {
    return (
        <div className="hnews__container flex container mx-auto gap-5">
            <div className="hnews__first flex-1">
                <NavLink to={paths.NEWS}>
                    <img
                        className="hnewsImg__first w-full h-full object-cover"
                        src="./public/img/hnews1.jpg"
                        alt="news"
                    />
                    <div className="hnews__path__new">
                        <h3>News</h3>
                        <hr />
                    </div>
                </NavLink>
            </div>
            <div className="flex-1">
                <img
                    className="w-full"
                    src="./public/img/hnews2.jpg"
                    alt="news"
                />
                <div>
                    <p className="hnew__content__title">01/04/2024</p>
                    <p className="hnew__item__title">
                        Saigontourist Launches Promotions to Boost Summer
                        Tourism
                    </p>
                    <p className="text-gray-400">
                        Saigontourist Travel Service Company organized the
                        &#34;Summer Welcome Party 2024&#34; event on March 30,
                        aimed at enticing travelers with exclusive discounts and
                        promotions as they gear up for the peak tourism season.
                    </p>
                </div>
            </div>
            <div className="flex-1">
                <img
                    className="w-full"
                    src="./public/img/hnews3.jpg"
                    alt="news"
                />
                <div>
                    <p className="hnew__content__title">01/04/2024</p>
                    <p className="hnew__item__title">
                        Saigontourist Launches Promotions to Boost Summer
                        Tourism
                    </p>
                    <p className="text-gray-400">
                        Saigontourist Travel Service Company organized the
                        &#34;Summer Welcome Party 2024&#34; event on March 30,
                        aimed at enticing travelers with exclusive discounts and
                        promotions as they gear up for the peak tourism season.
                    </p>
                </div>
            </div>
            <div className="flex-1">
                <img
                    className="w-full"
                    src="./public/img/hnews4.jpg"
                    alt="news"
                />
                <div>
                    <p className="hnew__content__title">01/04/2024</p>
                    <p className="hnew__item__title">
                        Saigontourist Launches Promotions to Boost Summer
                        Tourism
                    </p>
                    <p className="text-gray-400">
                        Saigontourist Travel Service Company organized the
                        &#34;Summer Welcome Party 2024&#34; event on March 30,
                        aimed at enticing travelers with exclusive discounts and
                        promotions as they gear up for the peak tourism season.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsKarnel;
