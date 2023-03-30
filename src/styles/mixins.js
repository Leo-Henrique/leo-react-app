import { css } from "styled-components";
import theme from "./theme";

export const transition = (properties, type = "button") => (css`
    transition-property: ${properties.join(", ")};
    transition-duration: ${theme.transitions[type].duration}ms;
    transition-timing-function: ${theme.transitions[type].timingFunction};
`);

export const SVGResponsive = (css`
    display: block;
    max-width: 100%;
    height: auto;
`);

export const center = (css`
    margin-left: auto;
    margin-right: auto;
`);