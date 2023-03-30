const media = "@media";
const property = "max-width";
const sizes = {
    xxl: "1399.98px",
    xl: "1199.98px",
    lg: "991.98px",
    md: "767.98px",
    sm: "575.98px",
}

export const devices = {};
Object.keys(sizes).forEach(breakpoint => {
    devices[breakpoint] = `(${property}: ${sizes[breakpoint]})`;
});

export const breakpoints = {};
Object.keys(sizes).forEach(breakpoint => {
    breakpoints[breakpoint] = `${media} (${property}: ${sizes[breakpoint]})`;
});

export const desktop = `${media} not all and (hover: none)`;
export const animation = `${media} (prefers-reduced-motion: no-preference)`;