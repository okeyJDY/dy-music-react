import styled from 'styled-components';

export const NewAlbumWrapper = styled.div`
  margin-top: 50px;

  .content {
    display: flex;
    align-items: center;

    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;

    .arrow {
      width: 22px;
      height: 22px;
      padding: 0;
      cursor: pointer;
      transform: translateY(-50%);
    }

    .arrow-left {
      background-position: -260px -73px;
    }

    .arrow-right {
      background-position: -300px -73px;
    }

    .album {
      flex: 1;
      width: 644px;
      height: 150px;

      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }

      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;

        margin-top: 10px;
      }
    }
  }


`