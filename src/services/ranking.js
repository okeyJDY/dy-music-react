import request from './request';

export const getTopList = () => {
  return request({
    url: "/toplist"
  })
}

export const getPlayList = (id) => {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}