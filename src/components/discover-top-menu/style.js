import styled from "styled-components";

export const DiscoverTopMenuWrapper = styled.div`
  width: 100%;
  height: 30px;
  background-color: #c20c0c

`

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  top: -4px;

  .menu-item {
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      margin: 7px 17px 0;
      padding: 0 13px;
      color: #fff;

      &:hover, &.active{
        text-decoration: none;
        background-color: #9B0909;
        border-radius: 20px;
      }
    }
  }
`