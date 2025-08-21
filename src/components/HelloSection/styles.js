import { css } from '@emotion/core';

export const styWrapper = css`
  @keyframes borderColorChange {
    0% {
      border-color: blue;
    }
    50% {
      border-color: red;
    }
    100% {
      border-color: green;
    }
  }

  .animatedBorder {
    animation: borderColorChange 3s infinite;
  }
  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;
