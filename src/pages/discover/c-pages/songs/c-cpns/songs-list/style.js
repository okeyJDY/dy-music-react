import styled from 'styled-components';

export const ListWrapper = styled.div`

  .song-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    .song-cover {
      margin-right: 49px;
    }

    .song-cover:nth-child(5n) {
      margin-right: 0;
    }
  }
`
