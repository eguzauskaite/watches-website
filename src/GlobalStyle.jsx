import { createGlobalStyle } from "styled=components";
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&family=Montserrat:wght@400;500;600;700&family=Poppins:wght@100;400;700&display=swap');

//:root {
    //--header-height: 3.5rem;

/* ========= colors ========= */
//--title-color: #66757F;
//--text-color: #CCD6DD;
//--body-color:  #000000;

/* ==== font and typography ====== */
/* .5rem = 8px / 1rem = 16px... */
//--body-font: 'Montserrat', sans-serif;
//--h1-font-size: 1.5rem;
//--h3-font-size: 1rem;
//--normal-font-size: .938rem;
//--small-font-size: .813rem;

/* ====== font weight ====== */
//--font-regular: 400;
//--font-semi-bold: 600;
//--font-bold: 700;//

/* ======= z index ======== */
//--z-tooltip: 10;
//--z-fixed: 100;

/* ===== responsive typography ===== */
//@media screen  and (min-width: 1152px) {
    //:root {
        //--h1-font-size: 2.25rem;
        //--h3-font-size: 1.25rem;
       // --normal-font-size: 1rem;
      //  --small-font-size: .875rem;


export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sens-serif;
}

html {
    font-size: 63%;
    overflow-x: hidden;
}
h1 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 1.5rem;
    font-weight: 700;
}
h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
}
p {
    color: ${({ theme }) => theme.colors.text};
    opacity: .5
    font-size: .813rem;
    font-weight: 400;
    text-align: center;
    margin-top: 1rem;
}

li {
    list-style: none;
}
a {
    text-decoration: none;
}
`;