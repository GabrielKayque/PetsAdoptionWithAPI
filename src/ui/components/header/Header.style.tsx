import { styled } from '@mui/material'


export const HeaderContainer = styled('header')`
    display: flex;
    justify-content: center;
    background-color: #f6f6f6;
    border-bottom: 1px solid #f0f0f0;
    padding: ${({ theme }) => theme.spacing(6)};
    height: 12vw
`;

export const Logo = styled('img')`
    width: 500px;
`;
