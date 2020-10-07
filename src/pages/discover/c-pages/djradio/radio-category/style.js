import styled from 'styled-components';

export const RadioCategoryWrapper = styled.div`
  position: relative;

  .arrow {
    position: absolute;
    top: 50%;
    width: 20px;
    height: 30px;
    transform: translateY(-50%);
    opacity: 0.25;
    background: url(${require("@/assets/img/radio_slide.png")}) no-repeat 0 9999px;
    text-indent: -9999px;
    cursor: pointer;
  }

  .arrow-left {
    left: -26px;
    background-position: 0 -30px;
  }

  .arrow-right {
    right: -26px;
    background-position: -30px -30px;
  }
`

export const RadioCategoryContent = styled.div`
  .dots {
    bottom: 0;
    
    li {
      display: flex;
      align-items: center;
      width: 20px;
      height: 20px;
      margin: 0;
      transition: none;

      button {
        width: 20px;
        height: 20px;
        background: url(${require("@/assets/img/radio_slide.png")}) no-repeat 0 0 !important;
        transition: none;
      }
    }

    .slick-active button {
      width: 20px;
      background-position: -30px 0 !important;
    }
  }

  .category-page {
    display: flex !important;
    flex-wrap: wrap;
    height: 194px;
    /* background-color: #364d79; */
  }

  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 70px;
    height: 70px;
    margin: 0 33px 25px 0;
    font-size: 12px;

    &:nth-child(9n) {
      margin-right: 0;
    }
    
    &:hover {
      cursor: pointer;
      background-position: 0 0;
    }
  }
`

export const CategoryItemImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${props => props.imgUrl});
`
