import styled, { css } from "styled-components";

const Container = styled.div(({ theme }) => (css`
    max-width: ${theme.grid.container.default};
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
    ${theme.mixins.center};

    ${theme.breakpoints.xxl} {
        max-width: ${theme.grid.container.xxl};
    }
    ${theme.breakpoints.xl} {
        max-width: ${theme.grid.container.xl};
    }
    ${theme.breakpoints.lg} {
        max-width: ${theme.grid.container.lg};
    }
    ${theme.breakpoints.md} {
        max-width: ${theme.grid.container.md};
    }
    ${theme.breakpoints.sm} {
        max-width: ${theme.grid.container.sm};
    }
`));

export default Container;