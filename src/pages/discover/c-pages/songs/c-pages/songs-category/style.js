import styled from 'styled-components';

export const SongsCategoryWrapper = styled.div`

  .select {
    height: 31px;
    padding: 0 15px;
    border: 1px solid #cdcdcd;
    border-bottom-width: 2px;
    border-radius: 5px;
    background-color: #fbfbfb;
    color: #0c73c2;

    &:hover {
      border-top-color: #dedddd;
      border-left-color: #cdcccc;
      border-right-color: #d9d8d8;
      background-color: #fff;
      cursor: pointer;
    }

    i {
      width: 8px;
      height: 8px;
      margin-left: 5px;
      display: inline-block;
      background-position: -70px -541px;
    }
  }
`
export const TitleButton = styled.button`
  width: 75px;
  height: 26px;
  line-height: 26px;
  margin: 12px 0 6px 11px;
  background-position: 0 -64px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const CategoryContent = styled.div`
  padding: 0;
  font-size: 12px;

  .category {
    display: flex;
    align-items: flex-start;

    dt {
      display: flex;
      align-items: center;
      width: 70px;
      margin-left: 26px;
      padding-top: 16px;
      font-weight: 700;
      color: #333;

      .icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    }

    dd {
      display: flex;
      flex-wrap: wrap;

      width: 605px;
      line-height: 25px;
      padding-left: 20px;
      padding: 16px 15px 0 15px;
      border-left: 1px solid #e6e6e6;
      color: #333;

      .link {
        padding: 0 1.5px;
      }
      .link:hover {
        text-decoration: underline;
        cursor: pointer;
      }

      .divider {
        margin: 0 8px 0 10px;
        color: #d8d8d8;
      }
    }
  }

  .active {
    padding: 2px 6px !important;
    background-color: #a7a7a7;
    color: #fff;
  }

  .item0 .icon {
    background-position: -20px -735px;
  }
  .item1 .icon {
    background-position: 0 -60px;
  }
  .item2 .icon {
    background-position: 0 -88px;
  }
  .item3 .icon {
    background-position: 0 -117px;
  }
  .item4 .icon {
    background-position: 0 -141px;
  }
  .item4 dd {
    padding-bottom: 25px;
  }
`
