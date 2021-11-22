import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
:root{
    --white: #ffffff;
    --balck: #000000;
    --violet: #403CAA;
    --green: #11995E;
    --greenClean: #E7F5EF;
    --gray: #999999;
    --grayClean: #F5F5F5;
    --red: #F40000;
}
body{
    background: var(--greenClean);
}
body, input, button, h1, h2, h3, h4, h5, h6{
    font-family: 'Inter', serif;
    font-size: 1rem;
}
h1, h2, h3, h4, h5, h6{
    font-weight: bold;
}
button{
    cursor: pointer;
}
a{
    text-decoration: none
}
html, body, #root{
    height: 100%;
}
`;