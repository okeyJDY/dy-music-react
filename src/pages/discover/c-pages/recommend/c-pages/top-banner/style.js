import styled from "styled-components";

export const TopBannerWrapper = styled.div`
  .banner {
    height: 270px;

    display: flex;
  }
`
export const TopBannerLeft = styled.div`
  background-color: pink;
  width: 730px;

  .banner-item {
    display: block;
    height: 270px;
    overflow: hidden;

    .image {
      width: 100%;
    }
  }
`

export const TopBannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_brank"
})`
  position: relative;
  width: 254px;
  height: 270px;
  background-image: url(${require("@/assets/img/download.png")});

  &:hover {
    /* background-position: 0 -290px; */
    text-decoration: none;
  }

  p {
    position: absolute;
    bottom: 5px;
    left: 14px;
    color: #8d8d8d;
  }
`