import { styled } from '@mui/material'

export const HeaderContainer = styled('header')`
    position:sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    border: 2px solid red;
    background-color: #f6f6f6;
    padding: ${({ theme }) => theme.spacing(2)};
    /* min-height: 50rem; */
    
    div { 
        /* height: 100%; */
        border: 2px solid green;
        margin: 0 auto;
        max-width: 75em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${({ theme }) => theme.spacing(2)};
    }

    a {
        font-size: 1.2em;
        color: black;
    }
`
export const Logo = styled('img')`
    width: min(250px, 50%)
`

export const LinksContainer = styled('nav')`
    border: 2px solid blue;
    display:flex;
    gap: ${({ theme }) => theme.spacing(2)};
    flex-wrap: wrap;
    justify-content: flex-end;

`
