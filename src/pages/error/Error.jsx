import Lottie from "lottie-react";
import Page404 from "../../assets/lotties/404Animation.json";

const Error = () => {
    return (
        <div className="flex justify-center items-center">
            <Lottie animationData={Page404} loop={true} />;
        </div>
    );
};

export default Error;
