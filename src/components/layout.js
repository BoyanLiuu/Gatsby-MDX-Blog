import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { GlobalStyle } from '../../Theme'
import Header from './Header'

const StyledLayout = styled.div`
    min-height: 100vh;
    border: 1px solid red;
    max-width: 70.4rem;
    margin: auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
    /* row-gap: 2.5rem; */
    row-gap: 2rem;

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 70.4rem;
        justify-self: center;
        padding: 0rem 2rem;
    }
`

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <GlobalStyle />
            <StyledLayout>
                <Header />
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    <a href='https://www.boyanliu.me/'> Boyan</a>
                </footer>
            </StyledLayout>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
