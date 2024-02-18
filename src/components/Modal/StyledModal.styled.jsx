import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  .modal-content {
    position: relative;
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    max-width: 80%;
    overflow: auto;
    width: 541px;
    height: 752px;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #555;
  }

  .img-modal {
    height: 248px;
    margin-bottom: 14px;
    border-radius: 14px;
    overflow: hidden;
  }
  .button {
    color: #fff;
    background-color: #3470ff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    text-decoration: none;
    width: fit-content;
    padding: 12px 50px;
    border: 0;
    border-radius: 12px;
  }

  .text {
    margin-top: 14px;
  }

  .text2 {
    margin-bottom: 8px;
    margin-top: 24px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
  }

  .text3 {
    color: #12141780;
    font-size: 12px;
  }

  .conteiner1 {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
  }
  .text-conteiner {
    font-size: 12px;
    letter-spacing: 0.02em;
    padding: 7px 14px;
    border-radius: 35px;
    background: #f9f9f9;
  }
`;
