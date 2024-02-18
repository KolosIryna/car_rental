import styled from 'styled-components';

export const StyledFormFilter = styled.form`
  height: 74px;
  width: 859px;
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 50px;
  margin-bottom: 50px;

  .label {
    color: #8a8a89;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
  }

  .selector {
    display: flex;
    align-items: center;
    padding-left: 18px;
    margin-top: 8px;
    height: 48px;
    border: none;
    border-radius: 14px;
    background: #f7f7fb;

    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }

  .container {
    display: flex;
    margin-top: 8px;
  }
  .container2 {
    position: relative;
  }

  .item {
    position: relative;
  }

  .from-to {
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);

    font-size: 18px;
    font-weight: 500;
    line-height: 1.11%;
  }

  .input-from {
    padding-left: 75px;
    width: 160px;
    height: 48px;
    border: none;
    border-radius: 14px 0 0 14px;
    background-color: #f7f7fb;
    border-right: 1px solid;

    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
  .input-to {
    padding-left: 75px;
    width: 160px;
    height: 48px;
    border: none;
    border-radius: 0 14px 14px 0;
    background-color: #f7f7fb;

    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
  .btn {
    display: flex;
    padding: 14px 44px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 12px;

    background-color: #3470ff;
    color: white;
    width: 136px;
    height: 48px;
    font-weight: 600;
    line-height: 1.43;

    &:hover,
    &:focus {
      background-color: #0b44cd;
    }
  }
`;
