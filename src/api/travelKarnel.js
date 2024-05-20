import { http } from "./config";

export const travelKarnel = {
    listTravelImage: () => {
        return http.get("/travel/img");
    },
    listTravelContact: () => {
        return http.get("/travel/contact");
    },
};
