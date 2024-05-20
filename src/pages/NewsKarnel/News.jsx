import "./news.scss";
const News = () => {
    return (
        <div className="news__container">
            <div className="news__banner">
                <div className="newsBanner__item">
                    <div className="newsBanner__title">News</div>
                    <hr />
                </div>
            </div>
            <div className="Release">
                <div className="release__item">
                    <div className="flex">
                        <div>
                            <img
                                className="w-[500px] h-[300px] object-cover"
                                src="https://saigon-tourist.com/files/images/luu-tru/luu-tru-mien-nam/hotels-2024/rex-hotel-saigon-2-copy.jpg"
                                alt="img"
                            />
                        </div>
                        <div className="content ml-9">
                            <p className="text-3xl text-white font-bold">
                                01/04/2024
                            </p>
                            <p className="text-white my-5 text-3xl italic font-bold">
                                Karnel Travel Launches Promotions to Boost
                                Summer Tourism
                            </p>
                            <p className="text-white">
                                Karnel Travel Service Company organized the
                                Summer Welcome Party 2024 event on March 30,
                                aimed at enticing travelers with exclusive
                                discounts and promotions as they gear up for the
                                peak tourism...
                            </p>
                        </div>
                    </div>
                    <div className="flex my-10">
                        <div>
                            <img
                                className="w-[500px] h-[300px] object-cover"
                                src="https://saigon-tourist.com/files/images/luu-tru/luu-tru-mien-trung/hotel-saigon-morin-copy-1.jpg"
                                alt="img"
                            />
                        </div>
                        <div className="content ml-9">
                            <p className="text-3xl text-white font-bold">
                                12/03/2024
                            </p>
                            <p className="text-white my-5 text-3xl italic font-bold">
                                Saigon – Morin Hue Hotel celebrates its 123rd
                                anniversary
                            </p>
                            <p className="text-white">
                                With its special geographical and historical
                                location and architectural beauty, the hotel has
                                been included in the list of typical French
                                architectural works of Hue city. This is also
                                one of the oldest hotels in Vietnam, the first
                                hotel in the Central region...
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <img
                                className="w-[500px] h-[300px] object-cover"
                                src="https://saigon-tourist.com/files/new-folder/event-updates-2024/reservation-copy.jpg"
                                alt="img"
                            />
                        </div>
                        <div className="content ml-9">
                            <p className="text-3xl text-white font-bold">
                                10/01/2024
                            </p>
                            <p className="text-white my-5 text-3xl italic font-bold">
                                Saigontourist Group Offers Huge Promotions for
                                Q1/2024
                            </p>
                            <p className="text-white">
                                As Christmas and New Year’s Day approach,
                                Saigontourist Group has unveiled extensive
                                programs and hot deals to cater to customers at
                                its luxury hotels in HCMC....
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
