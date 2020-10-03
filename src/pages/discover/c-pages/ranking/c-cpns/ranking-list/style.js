import styled from 'styled-components';

export const RankingListWrapper = styled.div`
  padding: 0 40px;
`

export const RankingNumTd = styled.div`
  height: 18px;
  line-height: 18px;
  display: flex;
  justify-content: space-between;

  .num {
    flex: 1;
    padding-left: 6px;
    color: #999;
  }

  .new {
    flex: 1;
    background-position: -60px -283px;
  }
`
export const TitleTd = styled.div`
  display: flex;
  align-items: center;
  color: #333;

  .image {
    width: 50px;
    height: 50px;
    margin-right: 14px;

    &:hover {
      cursor: pointer;
    }
  }

  .play {
    display: inline-block;
    width: 17px;
    height: 17px;
    margin-right: 8px;
    background-position: 0 -103px;
    cursor: pointer;

    &:hover {
      background-position: 0 -128px;
    }
  }

  .name {
    max-width: 190px;
  }

  .name:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const TimeTd = styled.div`

`

export const SingerTd = styled.div`
  color: #333;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
