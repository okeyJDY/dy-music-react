import styled from 'styled-components';

export const ArtistCategoryWrapper = styled.div`
  .section {
    &:nth-child(n+2) {
      margin: 5px 0 0;
      padding-top: 16px;
      border-top: 1px solid #d3d3d3;
    }
    .title {
      height: 25px;
      padding-left: 14px;
      font-size: 16px;
      font-weight: 700;
      font-family: "Microsoft Yahei";
    }
  }
  
`
export const CategoryItem = styled.div`
  font-size: 12px;
  margin: 2px 0;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  &.active {
    span {
      color: #c20c0c;
      background-position: 0 0;
    }
  }

  span {
    display: block;
    width: 160px;
    height: 29px;
    line-height: 29px;
    padding-left: 27px;
    color: #333;
    background: url(${require("@/assets/img/singer_sprite.png")}) no-repeat 0 -30px;
  }
`
