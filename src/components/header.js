import * as React from 'react'

import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1.6rem;
    padding: 2rem;
    .btn-icon {
        display: inline-block;
        background: rgb(255, 255, 255);
        color: rgb(1, 1, 1);
        padding: 0.8rem 1.2rem;
        border-radius: 0.5rem;
        transition: all 300ms ease 0s;
        border: 0.2rem solid rgb(1, 1, 1);
        margin-bottom: 0.5rem;
        box-shadow: rgb(1 1 1) 0.3rem 0.3rem 0px !important;
    }
    .navbar-container {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        column-gap: 2rem;
        margin-top: 1.6rem;
        a {
            color: black;
        }
    }
`
const Header = () => (
    <StyledHeader>
        <Link to='/' className='btn-icon'>
            Boyan Liu
        </Link>
        <nav className='navbar-container'>
            <Link to='/'>Home</Link>
            <span>|</span>
            <Link to='/blog'>Blog</Link>
            <span>|</span>
            <Link to='/about'>About</Link>
            <span>|</span>
            <Link to='/archives'>Archives</Link>
            <span>|</span>
            <Link to='/contact'>Contact</Link>
        </nav>
    </StyledHeader>
)

export default Header
