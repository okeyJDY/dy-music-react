import styled from 'styled-components';

export const CategoryListWrapper = styled.div`
  margin-top: 35px;
  
  .recommend-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .item {
    display: flex;
    width: 435px;
    padding: 20px 0;

    &:nth-child(-n+2) {
      border-bottom: 1px solid #e7e7e7;
    }

    h3 {
      margin: 16px 0 20px 20px;
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }
  }
`
