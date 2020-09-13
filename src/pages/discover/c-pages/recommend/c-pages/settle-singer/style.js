import styled from 'styled-components';

export const SettleSingerWrapper = styled.div`
  padding: 20px;

  .singer-list {
    .item {
      display: flex;
      width: 210px;
      margin-top: 14px;
      text-decoration: none;
      background-color: #fafafa;

      &:nth-child(1) {
        margin-top: 20px;
      }

      &:hover .info {
        background-color: #f4f4f4;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        width: 148px;
        padding-left: 14px;
        border: 1px solid #e9e9e9;
        border-left: none;

        .title {
          font-size: 14px;
          font-weight:700;
          color: #333;
        }
      }
    }
  }

  .apply-for {
    margin-top: 14px;
    background-position: right -100px;

    a {
      display: inline-block;
      width: 208px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      font-weight: 700;
      color: #333;
      background-position: 0 -59px;
      text-decoration: none;

    }
    &:hover {
      background-position: right -182px;
    }

    &:hover a {
      background-position: 0 -141px;
    }
  }
`