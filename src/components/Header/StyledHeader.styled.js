import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 80px;
  padding: 10px 128px;
  display: flex;
  align-items: center;
  background: linear-gradient(#3470ff, #f1f5ff);

  .header {
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: 700;
  }
  .nav {
    display: flex;
    gap: 12px;
  }
  .header_link {
    font-size: 18px;
    font-weight: 500;

    &:hover,
    &:focus {
      color: #0d00ff;
    }
  }
`;
