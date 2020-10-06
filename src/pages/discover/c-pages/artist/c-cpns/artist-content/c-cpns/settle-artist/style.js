import styled from 'styled-components';

export const SettleArtistWrapper = styled.div`

  .artist-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
  }

  .artist-item {
    margin-bottom: 30px;

    .artist-image {
      width: 130px;
      height: 130px;
      position: relative;

      .cover {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-indent: -9999px;
        background-position: 0 -680px;
      }
    }


    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;

      .icon {
        width: 17px;
        height: 18px;
        background-position: 0 -740px;
      }
    }
  }
`

export const RightSlot = styled.span`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
