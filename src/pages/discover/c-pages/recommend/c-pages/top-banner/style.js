import styled from "styled-components";

export const TopBannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    position: relative;
    display: flex;
    height: 285px;
  }
`
export const TopBannerLeft = styled.div`
  width: 730px;

  .dots {
    margin-bottom: 5px;
    li {
      width: 6px;
      height: 6px;
      padding: 0 6px;
      border-radius: 50px;

      button {
        width: 6px;
        height: 6px;
        border-radius: 50px;
        
        &:hover {
          background-color: red;
        }
      }
    }

    .slick-active {
      width: 6px !important;
      height: 6px;

      button {
        width: 6px;
        height: 6px;
        border-radius: 50px;
        background-color: red !important;
      }
    }
  }

  .banner-item {
    display: block;
    height: 285px;
    overflow: hidden;

    .image {
      width: 730px;
      height: 285px;
    }
  }
`

export const TopBannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_brank"
})`
  position: relative;
  top: 0;
  right: 0;
  width: 254px;
  height: 285px;
  background-position: 0 0;

  .download-btn {
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19.2px;
    
    &:hover {
      background-position: 0 -290px;
    }
  }

  p {
    position: absolute;
    bottom: 16px;
    left: 14px;
    color: #8d8d8d;
  }
`

export const TopBannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    transform: translateY(-50%);
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .2);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`