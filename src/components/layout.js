import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './Header'

const StyledLayout = styled.div`
    min-height: 100vh;
    border: 1px solid red;
    max-width: 704px;
    margin: auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
    /* row-gap: 2.5rem; */
    row-gap: 20px;
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
        <StyledLayout>
            <Header />
            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()}, Built with
                <a href='https://www.boyanliu.me/'> Boyan</a>
            </footer>
        </StyledLayout>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
