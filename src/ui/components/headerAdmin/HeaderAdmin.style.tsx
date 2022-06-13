import { styled } from '@mui/material'

export const HeaderContainer = styled('header')`
    width: 100%;
    background-color: #f6f6f6;
    padding: ${({ theme }) => theme.spacing(2)};
    
    div { 
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
    cursor: pointer;
    width: min(250px, 50%);
`

export const LinksContainer = styled('nav')`
    display:flex;
    gap: ${({ theme }) => theme.spacing(2)};
    flex-wrap: wrap;
    justify-content: flex-end;

`
