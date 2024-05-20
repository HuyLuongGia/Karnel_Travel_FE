import { http } from "./config";

export const gastronomyKarnel = {
    listGastronomyCentral: () => {
        return http.get("/gastronomy/central");
    },
    listGastronomyNorth: () => {
        return http.get("/gastronomy/north");
    },
    listGastronomySouth: () => {
        return http.get("/gastronomy/south");
    },
};
