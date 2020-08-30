import request from "./request";

export const getTopBanners = () => request.get("/banner");

export const getHotRecommends = limit => request.get("/personalized", { params: { limit } });

export const getNewAlbums = limit => request.get("/top/album", { params: { limit } });

export const getTopList = idx => request.get("/top/list", { params: { idx } });