import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import paths from "../paths";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ListMovie from "../components/ListMovie/ListMovie";
import Theater from "../components/Theater/Theater";
// import AboutUs from "../pages/aboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import News from "../pages/NewsKarnel/News";
import HotelKarnel from "../pages/ServiceKarnel/HotelKarnel/HotelKarnel";
import Travel from "../pages/ServiceKarnel/Travel/Travel";
import Gastronomy from "../pages/ServiceKarnel/Gastronomy/Gastronomy";
import Amusement from "../pages/ServiceKarnel/Amusement/Amusement";
import AboutUsKarnel from "../pages/AboutUsKarnel/AboutUsKarnel";
import HotelKarnelDetail from "../pages/HotelKarnelDetail/HotelKarnelDetail";
import HotelSouth from "../pages/HotelKarnelDetail/HotelSouthDetail/HotelSouth";
import GasCentralDetail from "../pages/GastronomyDetail/GastronomyCentralDetail/GasCentralDetail";
import Payment from "../pages/Payment/Payment";
import AmuseDetail from "../pages/AmuseDetail/AmuseDetail";

const HomePage = lazy(() => import("../pages/home"));
const LoginPage = lazy(() => import("../pages/auth/Login"));
const RegisterPage = lazy(() => import("../pages/auth/Register"));
const MoviePage = lazy(() => import("../pages/movie"));
const BookingPage = lazy(() => import("../pages/booking"));
const BlogPage = lazy(() => import("../pages/blog"));
const EventPage = lazy(() => import("../pages/event"));
const ErrorPage = lazy(() => import("../pages/error"));

const MovieManagerPage = lazy(() => import("../pages/managers/MovieManager"));
const UserManagerPage = lazy(() => import("../pages/managers/UserManager"));
const ShowtimeManagerPage = lazy(() =>
    import("../pages/managers/ShowtimeManager")
);

const AuthRouter = () => {
    // user's authentication for login
    let isAuthenticated = false;

    return isAuthenticated ? <Navigate to={paths.HOME} /> : <Outlet />;
};

const BookingRouter = () => {
    // user's authentication for booking ticket
    let isAuthenticated = false;

    return isAuthenticated ? <Outlet /> : <Navigate to={paths.LOGIN} />;
};

const useRoutesElements = () => {
    const elements = useRoutes([
        {
            path: "",
            element: <AuthRouter />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: paths.LOGIN,
                            index: true,
                            element: (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LoginPage />
                                </Suspense>
                            ),
                        },
                        {
                            path: paths.REGISTER,
                            element: (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <RegisterPage />
                                </Suspense>
                            ),
                        },
                    ],
                },
            ],
        },
        {
            path: "",
            element: <BookingRouter />,
            children: [
                {
                    path: paths.BOOKING,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <BookingPage />
                        </Suspense>
                    ),
                },
            ],
        },

        {
            path: paths.HOME,
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <HomePage />
                        </Suspense>
                    ),
                },
                {
                    path: `${paths.MOVIE_DETAIL}/:movieId`,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <MoviePage />
                        </Suspense>
                    ),
                },
                {
                    path: paths.BLOG,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <BlogPage />
                        </Suspense>
                    ),
                },
                {
                    path: paths.EVENT,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <EventPage />
                        </Suspense>
                    ),
                },
                {
                    path: paths.LIST_MOVIES,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ListMovie />
                        </Suspense>
                    ),
                },
                {
                    path: paths.THEATER,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Theater />
                        </Suspense>
                    ),
                },
                {
                    path: paths.ABOUT_KARNEL,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <AboutUsKarnel />
                        </Suspense>
                    ),
                },
                {
                    path: paths.CONTACT,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Contact />
                        </Suspense>
                    ),
                },
                {
                    path: paths.NEWS,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <News />
                        </Suspense>
                    ),
                },
                {
                    path: paths.HOTELS,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <HotelKarnel />
                        </Suspense>
                    ),
                },
                {
                    path: paths.TRAVEL,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Travel />
                        </Suspense>
                    ),
                },
                {
                    path: paths.GASTRONOMY,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Gastronomy />
                        </Suspense>
                    ),
                },
                {
                    path: paths.AMUSEMENT,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Amusement />
                        </Suspense>
                    ),
                },
                {
                    path: `${paths.HOTELS}/central/:hotelId`,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <HotelKarnelDetail />
                        </Suspense>
                    ),
                },
                {
                    path: `${paths.HOTELS}/south/:hotelId`,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <HotelSouth />
                        </Suspense>
                    ),
                },
                {
                    path: `${paths.GASTRONOMY}/central/:gasId`,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <GasCentralDetail />
                        </Suspense>
                    ),
                },
                {
                    path: `${paths.AMUSEMENT}/:amuseId`,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <AmuseDetail />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "401",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <ErrorPage message={"401 Unauthorized!"} />
                </Suspense>
            ),
        },
        {
            path: "*",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <ErrorPage message={"404 Not Found!!!"} />
                </Suspense>
            ),
        },
        {
            path: `${paths.PAYMENT}/central/:gasId`,
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Payment />
                </Suspense>
            ),
        },
    ]);

    return elements;
};

export default useRoutesElements;
