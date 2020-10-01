import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  border-bottom: 2px solid #c20c0c;

  .left {
    display: flex;
    align-items: flex-end;

    .title {
      font-size: 20px;
      line-height: 28px;
      margin-right: 20px;
    }

    .count {
      color: #666;
    }
  }

  .right {
    color: #666;

    .count {
      font-weight: 700;
      color: #c20c0c;
    }
  }
`
