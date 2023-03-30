import { breakpoints, desktop, animation } from "./mediaQueries";
import * as mixins from "./mixins";

const theme = {
    breakpoints,
    media: { desktop, animation },
    mixins,
    grid: {
        container: {
            default: "1320px",
            xxl: "1140px",
            xl: "960px",
            lg: "720px",
            md: "540px",
            sm: "100%",
        },
        gutter: "30px",
    },
    fontFamilies: ["'Poppins', sans-serif"],
    fontSizes: {
        h1: "6.4rem",
        h2: "4.8rem",
        h3: "2.8rem",
        body: "1.8rem",
        small: "1.4rem"
    },
    colors: {
        supportLight1: "#FFF",
        supportDark1: "#000",
        success: "#01CC88",
        warning: "#FFC107",
        danger: "#DC3545",
    },
    transitions: {
        global: {
            duration: 300,
            timingFunction: "ease-in-out",
        },
        button: {
            duration: 200,
            timingFunction: "ease-in-out",
        },
    },
    zIndex: {
        header: 10,
        nav: 20,
        headerContent: 30,
    },
};

export default theme;