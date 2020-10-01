import styled from 'styled-components';

export const OperationBarWrapper = styled.div`
  display: flex;
  align-items: center;

  .play {
    display: flex;
    align-items: center;

    .play-icon {
      display: inline-block;
      background-position: right -428px;
      text-decoration: none;

      .play {
        display: flex;
        height: 31px;
        line-height: 31px;
        align-items: center;
        padding: 0 7px 0 8px;
        background-position: 0 -387px;
        color: #fff;

        i {
          width: 20px;
          height: 18px;
          display: inline-block;
          margin: -2px 2px 0;
          background-position: 0 -1622px;
        }
      }
    }

    .add-icon {
      width: 31px;
      height: 31px;
      line-height: 30px;
      margin-right: 5px;
      background-position: 0 -1588px;
      text-indent: -9999px;
    }
  }

  .btn {
    height: 31px;
    display: inline-block;
    margin-right: 5px;
    padding-right: 5px;
    background-position: right -1020px;

    .icon {
      height: 31px;
      line-height: 31px;
      display: inline-block;
      padding: 0 7px 0 28px;
    }

    .favor-icon {
      background-position: 0 -977px;
    }

    .share-icon {
      background-position: 0 -1225px;
    }

    .download-icon {
      background-position: 0 -2761px;
    }

    .comment-icon {
      background-position: 0 -1465px;
    }
  }
`
