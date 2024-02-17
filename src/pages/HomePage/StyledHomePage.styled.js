import styled from 'styled-components';

export const StyledHomePage = styled.div`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    color: #3470ff;
    padding-top: 100px;
    margin-bottom: 72px;
  }

  .text {
    color: rgb(38 38 47 / 87%);
    text-decoration: underline;
    margin-bottom: 42px;
  }

  .services {
    width: 860px;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    color: #2f3397;
    text-align: left;
  }
`;
