import { http } from "./config";

export const hotelKarnel = {
    listHotelSouth: () => {
        return http.get("/hotel-resort/south");
    },
    listHotelNorth: () => {
        return http.get("/hotel-resort/north");
    },
    listHotelCenter: () => {
        return http.get("/hotel-resort/central");
    },
};
