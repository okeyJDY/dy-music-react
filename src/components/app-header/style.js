import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  
  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    width: 177px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;
    font-size: 14px;

    .select-item {
      position: relative;
      a {
        display: block;
        color: #ccc;
        padding: 0 19px;
      }

      :last-of-type a {
        position: relative;
        &::after {
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position-x: -192px;
          width: 28px;
          height: 19px;
          content: "";
          position: absolute;
          top: 17px;
          left: 102px;
        }
      }
      &:hover a, a.active {
        color: #fff;
        background-color: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        top: 64px;
        left: 50%;
        width: 12px;
        height: 7px;
        transform: translateX(-50%);
        background-position: -226px 0;
      }
    }
  }

`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #ccc;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    margin: 0 22px 0 12px;
    padding-left: 16px;
    border-radius: 20px;
    border: 1px solid #4f4f4f;

    &:hover {
      cursor: pointer;
      border-color: #fff;
      color: #fff;
    }
  }

  .login {
    padding-right: 22px;
    color: #787878;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
