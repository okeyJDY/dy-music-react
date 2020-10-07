import request from './request';

export const getDjRadioCateList = () => {
  return request({
    url: "/dj/catelist"
  })
}

export const getDjRecommendType = (type) => {
  return request({
    url: "/dj/recommend/type",
    params: { type }
  })
}

export const getDjRadioPrograms = () => {
  return request({
    url: "/program/recommend"
  })
}

export const getDjRadioProgramTopList = (limit) => {
  return request({
    url: "/dj/program/toplist",
    params: { limit }
  })
}

