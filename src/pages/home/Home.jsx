import Banner from "../../components/Banner/Banner";
import HomePageSearch from "../../components/HomePageSearch/HomePageSearch";
import "./home.scss";
import HomePageEvent from "../../components/HomePageEvent/HomePageEvent";
import ServiceList from "../../components/HomePageKarnel/ServiceList/ServiceList";
import AboutUsHp from "../../components/HomePageKarnel/AboutUsHP/AboutUsHp";
import Vision from "../../components/HomePageKarnel/Vision/Vision";
import NewsKarnel from "../../components/HomePageKarnel/NewsKarnel/NewsKarnel";

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <HomePageSearch />
            <ServiceList />
            <AboutUsHp />
            <Vision />
            <HomePageEvent />
            <NewsKarnel />
        </div>
    );
};

export default Home;
