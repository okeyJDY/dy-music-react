import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  height: 126px;
  background-position: 0 0;

  p {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
  }

  a {
    display: block;
    width: 100px;
    height: 31px;
    line-height: 30px;
    text-align: center;
    margin: 0 auto;
    color: #fff;
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;

    &:hover {
      text-decoration: none;
      background-position: -110px -195px;
    }
  }
`