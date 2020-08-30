import styled from 'styled-components';

export const AlbumCoverWrapper = styled.div`
  width: ${props => props.width + "px"};
  
  .album-image {
    position: relative;
    width: ${props => props.width + "px"};
    height: ${props => props.size + "px"};

    img {
      width: ${props => props.size + "px"};
      height: ${props => props.size + "px"};
      box-shadow: 0 5px 5px rgba(0, 0, 0, .3);
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp + "px"};
      text-indent: -9999px;

      &:hover .play {
        background-position: 0 -85px;
      }
    }

    .play {
      position: absolute;
      left: 72px;
      bottom: 5px;
      width: 22px;
      height: 22px;
      background-position: 0 -9999px;

      &:hover {
        cursor: pointer;
        background-position: 0 -110px !important;
      }
    }
  }
  
  .album-info {
    margin-top: 5px;
    font-size: 12px;

    .name {
      color: #000;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .artist {
      color: #666;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`