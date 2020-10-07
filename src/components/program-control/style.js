import styled from 'styled-components';

export const ProgramControlWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 0;

  .left {
    min-width: 20px;
  }

  .content {
    display: flex;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: ${props => props.infoWidth + "px"};
      margin-left: 10px;
    }
    
    .name {
      color: #333;
      &:hover {
        color: #000;
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .desc {
      color: #999;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`
