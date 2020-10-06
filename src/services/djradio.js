import request from './request';

export const getDjRadioCateList = () => {
  return request({
    url: "/dj/catelist"
  })
}

