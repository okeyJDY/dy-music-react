import styled from 'styled-components';

export const AlphaListWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .alpha-item {
    width: 21px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 14px;

    &:first-child,
    &:last-child {
      width: 45px;
      font-size: 12px;
    }
    &:hover span {
      text-decoration: underline;
      cursor: pointer;
    }

    span {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }

  .active {
    border-radius: 2px;
    background-color: #c20c0c;
    color: #fff;
  }
`
