import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;
  border-bottom: 2px solid #c20c0c;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 24px;
    }
    .select {
      margin-left: 12px;
    }
  }

  .right {
    .hot {
      width: 46px;
      height: 29px;
      line-height: 29px;
      border-radius: 3px;
      color: #fff;
      background-position: 0 0;
    }

    &:hover .hot {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

