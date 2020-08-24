import styled from 'styled-components';

export const SongCoverWrapper = styled.div`
  width: 140px;
  margin: 20px 0;

  .cover-top {
    .cover {
      position: relative;
      background-position: 0 0;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 27px;
        padding: 0 10px;
        background-position: 0 -537px;
        color: #ccc;

        .erji {
          display: inline-block;
          width: 14px;
          height: 11px;
          margin-right: 5px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;

          &:hover {
            cursor: pointer;
            background-position: 0 -60px;
          }
        }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

  .cover-source {
    color: #666;
  }
`