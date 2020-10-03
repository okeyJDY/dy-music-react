import styled from 'styled-components';

export const HotRadioWrapper = styled.div`
  padding: 20px;

  .radio-list {
    margin-top: 20px;

    .item {
      display: flex;
      width: 210px;
      margin-bottom: 10px;

      .image img {
        width: 40px;
        height: 40px;
      }

      .info {
        width: 160px;
        line-height: 21px;
        margin-left: 10px;

        .title {
          .name {
            color: #000;
            margin-top: 2px;

            &:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }

          .vip {
            display: inline-block;
            position: relative;
            top: 1px;
            left: 3px;

            width: 11px;
            height: 13px;
            background-position: 0 1px;
          }
        }

        .position {
          color: #666;
        }
      }
    }
  }
`