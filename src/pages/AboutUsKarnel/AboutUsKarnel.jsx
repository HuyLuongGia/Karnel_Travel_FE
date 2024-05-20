import "./aboutUs.scss";

const AboutUsKarnel = () => {
    return (
        <div className="aboutUss__container">
            <div className="aboutUs__banner">
                <div className="aboutBanner__item">
                    <div className="aboutBanner__title">
                        About Karnel Travel
                    </div>
                    <hr className="mt-0 mb-4" />
                </div>
            </div>
            <div className="organization">
                <div className="title text-white text-3xl font-bold italic mt-10 mb-7">
                    Organizational Structure
                </div>
                <div className="text-[#D6A022] font-bold text-xl mb-7">
                    BOARD OF MEMBER
                </div>
                <div className="grid grid-cols-3">
                    <div>
                        <img
                            src="https://saigon-tourist.com/files/images/about-us/thumb/262x262/1pham-huy-binh.jpg"
                            alt="img"
                        />
                        <p className="text-yellow-300 font-bold mt-5 mb-2 text-xl">
                            Mr. Pham Huy Binh
                        </p>
                        <p className="text-white italic">
                            Chairman of Saigontourist Group
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://saigon-tourist.com/files/images/about-us/thumb/262x262/h-nh-anh-h-ng.jpg"
                            alt="img"
                        />
                        <p className="text-yellow-300 font-bold mt-5 mb-2 text-xl">
                            Mr. Truong Duc Hung
                        </p>
                        <p className="text-white italic">Member</p>
                    </div>
                    <div>
                        <img
                            src="https://saigon-tourist.com/files/images/about-us/thumb/262x262/thuong-my-an-1.jpg"
                            alt="img"
                        />
                        <p className="text-yellow-300 font-bold mt-5 mb-2 text-xl">
                            Mrs. Thuong My An
                        </p>
                        <p className="text-white italic">Member</p>
                    </div>
                </div>
            </div>
            <div className="direction">
                <div className="text-[#D6A022] font-bold text-xl mb-7 mt-28">
                    BOARD OF DIRECTIONS
                </div>
                <div className="grid grid-cols-3">
                    <div>
                        <img
                            src="https://saigon-tourist.com/files/images/about-us/thumb/262x262/h-nh-anh-h-ng.jpg"
                            alt="img"
                        />
                        <p className="text-yellow-300 font-bold mt-5 mb-2 text-xl">
                            Mr. Truong Duc Hung
                        </p>
                        <p className="text-white italic">General Director</p>
                    </div>
                    <div>
                        <img
                            src="https://saigon-tourist.com/files/images/about-us/thumb/262x262/ong-vo-anh-tai.png"
                            alt="img"
                        />
                        <p className="text-yellow-300 font-bold mt-5 mb-2 text-xl">
                            Mr. Vo Anh Tai
                        </p>
                        <p className="text-white italic">
                            Deputy General Director
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://saigon-tourist.com/files/images/about-us/thumb/262x262/nguyen-dong-hoa-2.jpg"
                            alt="img"
                        />
                        <p className="text-yellow-300 font-bold mt-5 mb-2 text-xl">
                            Mr. Nguyen Dong Hoa
                        </p>
                        <p className="text-white italic">
                            Deputy General Director
                        </p>
                    </div>
                    <div className="mt-10">
                        <img
                            src="https://saigon-tourist.com/files/images/about-us/thumb/262x262/nguyen-quoc-anh-1.jpg"
                            alt="img"
                        />
                        <p className="text-yellow-300 font-bold mt-5 mb-2 text-xl">
                            Mr. Nguyen Quoc Anh
                        </p>
                        <p className="text-white italic">
                            Deputy General Director
                        </p>
                    </div>
                </div>
            </div>
            <div className="about_vision">
                <div className="mt-20 text-white text-3xl font-bold italic">
                    A leading tourism brand in Vietnam
                </div>
                <p className="my-5 text-white leading-6">
                    Become one of the leading tourism brands in Vietnam and the
                    region in the fields of hotel & resorts - gastronomy -
                    travel - recreation - professional training and other travel
                    services.
                </p>
                <img
                    className="w-full"
                    src="https://saigon-tourist.com/img/application/about-us/vision.jpg"
                    alt="img"
                />
            </div>
        </div>
    );
};

export default AboutUsKarnel;
