import request from "./request";

export const getTopBanners = () => request.get("/banner");

export const getHotRecommends = limit => request.get("/personalized", { params: { limit } });