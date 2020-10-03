import styled from 'styled-components';

export const RankingHeaderWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  padding: 40px;

  .image {
    position: relative;
    padding: 3px;
    border: 1px solid #ccc;

    img {
      width: 150px;
      height: 150px;
    }

    .cover {
      position: absolute;
      text-indent: -9999px;
      background-position: -230px -380px;
    }
  }

  .info {
    margin-left: 30px;

    .title {
      height: 24px;
      line-height: 24px;
      font-size: 20px;
      margin-top: 16px;
    }

    .item {
      height: 35px;
      line-height: 35px;
      margin: 4px 0 20px;
      color: #666;

      .clock {
        display: inline-block;
        width: 13px;
        height: 13px;
        margin-right: 5px;
        transform: translateY(15%);
        background-position: -18px -682px;
      }

      .update-f {
        color: #999;
      }
    }
  }
`
