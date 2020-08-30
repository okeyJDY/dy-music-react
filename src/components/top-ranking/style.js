import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
  flex: 1;
  width: 229px;
`

export const TopRankingHeader = styled.div`
  display: flex;
  height: 120px;
  padding: 20px 0 0 20px;

  .image {
    position: relative;
    width: 80px;
    height: 80px;
    
    img {
      width: 80px;
      height: 80px;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: -145px -57px;
      text-indent: -9999px;
    }
  }

  .info {
    margin: 6px 0 0 10px;

    a {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }

    .btn {
      display: inline-block;
      width: 22px;
      height: 22px;
      margin: 10px 10px 0 0;
      cursor: pointer;
    }

    .play {
      background-position: -267px -205px;

      &:hover {
        background-position: -267px -235px;
      }
    }

    .favor {
      background-position: -300px -205px;

      &:hover {
        background-position: -300px -235px;
      }
    }
  }
`


export const TopRankingList = styled.div`
  .list-item {
    display: flex;
    align-items: center;
    height: 32px;
    margin-left: 16px;

    
    &:nth-child(-n+3) .rank {
      color: #c10d0c;
    }

    .rank {
      width: 35px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      font-size: 16px;
      color: #666;
    }


    .info {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 170px;
      height: 32px;
      line-height: 32px;
      

      .name {
        flex: 1;

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }

      .operate {
        display: none;
        justify-content: space-around;
        align-items: center;

        width: 82px;
        height: 19px;
        margin-right: 10px;

        .btn {
          width: 17px;
          height: 17px;
          padding: 0;
        }

        .play {
          background-position: -267px -268px;

          &:hover {
            cursor: pointer;
            background-position: -267px -288px;
          }
        }

        .addto {
          background-position: 2px -698px;

          &:hover {
            cursor: pointer;
            background-position: -20px -698px;
          }
        }
        
        .favor {
          background-position: -297px -268px;
          
          &:hover {
            cursor: pointer;
            background-position: -297px -288px;
          }
        }
      }

      &:hover {
        .operate {
          display: flex;
        }
      }
    }
  }
`


export const TopRankingFooter = styled.div`
  height: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 32px;

  a {
    color: #000;
  }
`