import styled from 'styled-components';

export const ArtistListWrapper = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  margin-top: 20px;
  color: #000;

  .name-info {
    display: flex;
    align-items: center;
    width: 130px;
    height: 30px;
  }
  
  .name:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .icon {
    width: 17px;
    height: 18px;
    margin-left: 5px;
    background-position: 0 -740px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
export const ImageCover = styled.div`
  padding: 0 16px 30px 0;

  &:nth-child(n+6) {
    margin-bottom: 12px;
    border-bottom: 1px dotted #999;
  }
  &:nth-child(5n) {
    padding-right: 0;
  }

  img {
    width: 130px;
    height: 130px;
  }

  .artist-image {
    position: relative;

    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: 0 -680px;
      text-indent: -9999px;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }
`
