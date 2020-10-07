import styled from 'styled-components';

export const CategoryRankingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  .program-control {
    width: 424px;

    &:nth-child(2n) {
      background-color: #f7f7f7;
    }

    &:hover {
      background-color: #eee;
    }
  }
`

export const CategoryRankingLeft = styled.div`
  width: 426px;

  .program-recommend {
    border: 1px solid #d3d3d3;
    border-width: 0 1px 1px;

    .category {
      padding: 0 6px;
      margin-left: 10px;
      border: 1px solid #999;
      color: #999;

      &:hover {
        color: #666;
        border-color: #666;
        cursor: pointer;
      }
    }
  }
`

export const CategoryRankingRight = styled.div`
  width: 426px;
  
  .program-toplist {
    border: 1px solid #d3d3d3;
    border-width: 0 1px 1px;
  }

`

export const RankNumber = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 47px;
  height: 40px;
  font-size: 14px;
  color: #999;

  .rank-icon {
    display: flex;
    align-items: center;

    .icon {
      display: inline-block;
      width: ${props => props.width + "px"};
      height: ${props => props.height + "px"};
      background-position: ${props => props.x + "px"} ${props => props.y + "px"};
    }

    .rank {
      margin-left: 3px;
      font-size: 12px;
      color: ${props => props.color};
    }
  }
`
