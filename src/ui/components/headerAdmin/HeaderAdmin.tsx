import { Link } from '@mui/material'
import NextLink from 'next/link'
import { HeaderContainer, LinksContainer, Logo } from "./HeaderAdmin.style"

export default function HeaderAdmin() {
    return (
        <HeaderContainer>
            <div>
                <Link component={NextLink} href={'/'}>
                    <Logo src={'/images/logo.svg'} alt={'Help A PET'} />
                </Link>
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/register'}>Register a Pet</Link>
                    <Link component={NextLink} href={'/pets/donations'}>See All Donations</Link>
                </LinksContainer>
            </div>
        </HeaderContainer>
    )
}
