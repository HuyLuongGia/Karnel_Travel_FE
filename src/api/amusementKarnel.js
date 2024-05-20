import { http } from "./config";

export const amusementKarnel = {
    listAmuseKarnel: () => {
        return http.get("/amusement");
    },
};
