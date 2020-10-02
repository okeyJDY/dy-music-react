import request from './request';

export const getSongCategory = () => {
  return request({
    url: "/playlist/catlist",
  })
}

export const getSongCategoryList = (cat = "全部", offset = 0, limit = 35) => {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      offset,
      limit,
    }
  })
}