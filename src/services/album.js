import request from './request';

export const getHotAlbums = () => {
  return request({
    url: "/album/newest"
  });
}

export const getTopAlbums = ({limit, offset, area}) => {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset,
      area
    }
  })
}