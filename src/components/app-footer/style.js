import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 1px solid #d3d3d3;
  background-color: #f2f2f2;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  width: 520px;
  height: 24px;
  color: #666;
  line-height: 24px;
  .link {
    a {
      color: #999;
    }
    .line {
      color: #c2c2c2;
      margin: 0 8px 0 10px;
    }
  }

  .copyright {
    span {
      margin-right: 14px;
    }

    .police-logo {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 2px;
      vertical-align: -1px;

      background: url(${require("@/assets/img/police_logo.png")}) no-repeat;
      background-size: cover;
    }
  }
`

export const FooterRight = styled.ul`
  display: flex;
  width: 420px;
  position: relative;
  top: 30px;
  .item {
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 70px;
    display: flex;
    padding: 0 5px;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }

    .link {
      width: 50px;
      height: 45px;
      background-image: url(${require("@/assets/img/sprite_footer_02.png")});
      background-size: 115px 555px;
    }

    &:nth-child(1) .link {
      background-position: 50px 96px;
    }

    &:nth-child(2) .link {
      background-position: 50px 453px;
    }

    &:nth-child(3) .link {
      background-position: 0 0;
    }

    &:nth-child(4) .link {
      background-position: 50px -51px;
    }
    
    &:nth-child(5) .link {
      background-position: 50px -102px;
    }

    .title {
      width: 52px;
      height: 14px;
      position: relative;
      top: 5px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png")});
      background-size: 180px 205px;
    }

    &:nth-child(1) .title {
      width: 72px;
      position: relative;
      right: 10px;
      background-position: 0 46px;;
    }

    &:nth-child(2) .title {
      background-position: 0 72px;;
    }

    &:nth-child(3) .title {
      background-position: 0 0;;
    }

    &:nth-child(4) .title {
      background-position: 0 125px;;
    }

    &:nth-child(5) .title {
      background-position: 0 98px;;
    }
  }
  
`