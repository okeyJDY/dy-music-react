import request from './request';

export const getArtistList = ({limit = 100, area, type, initial}) => {
  return request({
    url: "/artist/list",
    params: {
      limit,
      area,
      type,
      initial
    }
  })
}

export const getTopArtistList = (limit) => {
  return request({
    url: "/top/artists",
    params: { limit }
  })
}