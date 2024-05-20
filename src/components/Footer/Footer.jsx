import "./footer.scss";
import logo from "../../assets/img/karnel_logo.png";
const Footer = () => {
    return (
        <footer className="footer relative">
            <div className="footer__sub f__contain">
                <div className="fSub__container">
                    <div className="fsub__item">
                        <h5 className="fsub__cate">
                            Subscribe to Karnel Travel{" "}
                        </h5>
                        <h3 className="fsub__title">
                            to get exclusive benifits
                        </h3>
                        <form className="fsub__form mb-8">
                            <input
                                type="text"
                                placeholder="Your Email Address"
                            />
                            <button type="button">Subscribe</button>
                        </form>
                        <p className="text-[#dbe2fb]">
                            We respect your privacy, so we never share your info
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer__info f__contain">
                <div className="fInfo__top">
                    <div className="fInfor__logo">
                        <img
                            src={logo}
                            className="logo mr-3 sm:h-9 w-[100px]"
                            alt="Logo"
                        />
                    </div>
                    <div className="fsocial__icon">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-square-twitter"></i>
                        <i className="fa-brands fa-google-plus"></i>
                        <i className="fa-brands fa-square-instagram"></i>
                    </div>
                </div>
                <div className="fInfo__bottom">
                    <div className="copy__right">
                        Copyright © 2020.All Rights Reserved By
                        <span className="text-[#31d7a9]"> Karnel Travel</span>
                    </div>
                    <div className="fbot__link">
                        <p>About</p>
                        <p>Terms Of Use</p>
                        <p>Privacy Policy</p>
                        <p>FAQ</p>
                        <p>Feedback</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
