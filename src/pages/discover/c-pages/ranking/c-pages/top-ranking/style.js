import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
  padding: 25px 0;

  .header {
    padding: 12px 12px 10px;
    font-size: 14px;
    font-weight: 700;
    font-family: simsun;
    color: #000;
  }

  .item {
    display: flex;
    padding: 10px 0 10px 20px;

    &:hover {
      cursor: pointer;
      background-color: #e6e6e6;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: 100%;
      height: 40px;
      margin-left: 10px;

      .update {
        color: #999;
      }
    }
  }

  .active {
    background-color: #e6e6e6;
  }
`
