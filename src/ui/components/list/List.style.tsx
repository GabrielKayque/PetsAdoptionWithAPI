import { styled } from '@mui/material'

export const ListStyled = styled('ul')`
    width: 100%;
    max-width: 80vw;
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing(2)};
    border: 1px solid red;
`;

export const ItemList = styled('li')`

    margin-bottom: ${({ theme }) => theme.spacing(9)};
    ${({ theme }) => theme.breakpoints.up('md')} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: ${({ theme }) => theme.spacing(8)};
        gap: ${({ theme }) => theme.spacing(5)};


}   
`;

export const Photo = styled('img')`
    width: 100%;
`;

export const Info = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(2)}
`;

export const Name = styled('h2')`
    margin: 0.6em 0 0;
`;

export const Description = styled('p')`
    margin: 0;
    word-wrap: break-word;
`;
