import "./homePageSearch.scss";
const HomePageSearch = () => {
    return (
        <div className="home__search">
            <div className="hsearch__container">
                <div className="hsearch__header">
                    <div className="hsearch__first uppercase">
                        <h6 className="hsearch__category text-xl mb-2">
                            Welcome to Karnel Travel
                        </h6>
                        <h3 className="hsearch__title text-white text-3xl">
                            What are you looking for
                        </h3>
                    </div>
                    <div className="hsearch__second uppercase mb-5">
                        <button>
                            <i className="fa-solid fa-hotel"></i>
                            <span className="font-bold pl-3 text-white">
                                Hotel
                            </span>
                        </button>
                        <button>
                            <i className="fa-solid fa-utensils"></i>
                            <span className="font-bold pl-3 text-white">
                                GASTRONOMY
                            </span>
                        </button>
                        <button>
                            <i className="fa-solid fa-cable-car"></i>
                            <span className="font-bold pl-3 text-white">
                                AMUSEMENT
                            </span>
                        </button>
                    </div>
                </div>
                {/* Header Search */}
                <div className="hsearch__bar">
                    <div className="hsearchBar__item">
                        <form className="hsearchBar__form">
                            <div className="form__search">
                                <div className="form__group">
                                    <i className="fa-solid fa-city icon__search"></i>
                                    <span>City</span>
                                    <select name="movie">
                                        <option value="film">City</option>
                                    </select>
                                </div>
                                <div className="form__group">
                                    <i className="fa-solid fa-hotel icon__search"></i>
                                    <span>Hotel</span>
                                    <select name="movie">
                                        <option value="theater">Hotel</option>
                                    </select>
                                </div>
                                <div className="form__group">
                                    <i className="fa-solid fa-calendar-days icon__search"></i>
                                    <span>Date</span>
                                    <select name="movie">
                                        <option value="film">Date</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form__submit">
                                <button
                                    type="submit"
                                    className="btn__submit px-20 py-4 rounded-md bg-blue-500 text-white text-lg"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageSearch;
