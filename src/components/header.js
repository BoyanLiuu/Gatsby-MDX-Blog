import * as React from 'react'

import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.div`
    text-align: center;
`
const Header = () => (
    <StyledHeader>
        <Link to='/'>Boyan Liu</Link>
        <nav>
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
