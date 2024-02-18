import styled from 'styled-components';

export const StyledListCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px 29px;
  }

  .conteiner-img {
    margin-bottom: 14px;
    border-radius: 14px;
    overflow: hidden;
  }

  .car-li {
    width: 274px;
    position: relative;
  }

  .car-img {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    margin-bottom: 14px;
    width: 274px;
    height: 268px;
    object-fit: cover;
  }

  .conteiner-favorite {
    position: absolute;
    right: 8px;
    top: 8px;
    background-color: transparent;
    border-style: none;
    transition-duration: 0s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
    padding-top: 0px;
  }
  .favorite {
    background: none;
  }

  .name-car {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  .blok {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }

  .btnLearn {
    display: flex;
    width: 100%;
    padding: 12px 99px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 12px;
    margin-top: 28px;
    background-color: #3470ff;
    color: white;
    font-weight: 600;
    line-height: 1.43;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #0f3794;
    }
  }

  .load-more {
    background-color: transparent;
    border-width: 0px;
    font-size: 16px;
    font-weight: 500;
    text-decoration-line: underline;
    color: #3470ff;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
