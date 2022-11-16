import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Avatar } from '@mui/material'
import Foto from '../Foto'

const HeaderContainer = styled.nav`
width: 100%;
height: 100px;
padding: '0 20px';

a{
    color: 'white';
    text-decoration: 'none';
    font-size: '1.5rem';

}
`
const LinkHeader = styled.a`
display: 'flex';
align-items: 'center';
justify-content: 'center';
`

export default function Header() {

    return (
        <HeaderContainer>
            
            <Link href="#">
                <a> quem sou eu ?</a>
                <a> skills</a>
                <Foto />
                <a> projetos</a>
                <a> contato</a>
            </Link>

        </HeaderContainer>
    )
}
