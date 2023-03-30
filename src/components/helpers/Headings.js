import styled, { css } from "styled-components";

export const H1 = styled.h1(({ theme }) => (css`
    font-size: ${theme.fontSizes.h1};
    line-height: 1.1;
`));

export const H2 = styled.h2(({ theme }) => (css`
    font-size: ${theme.fontSizes.h2};
    line-height: 1.2;
`));

export const H3 = styled.h3(({ theme }) => (css`
    font-size: ${theme.fontSizes.h3};
    line-height: 1.3;
`));