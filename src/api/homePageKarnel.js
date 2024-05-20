import { http } from "./config";

export const homePageKarnel = {
    listBanner: () => {
        return http.get("/home-page/banner");
    },
    listServChoose: () => {
        return http.get("/home-page/ser-choose");
    },
};
