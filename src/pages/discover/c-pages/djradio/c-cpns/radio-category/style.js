import styled from 'styled-components';

export const RadioCategoryWrapper = styled.div`

`

export const RadioCategoryContent = styled.div`
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
