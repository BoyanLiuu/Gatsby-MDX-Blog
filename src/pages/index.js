import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import styled from 'styled-components'

const StyledImg = styled.div`
    border-radius: 10rem;
    width: 20rem;
`

const IndexPage = () => (
    <Layout>
        <Seo title='Home' />
        <h1>Hi people</h1>
        <StyledImg>
            <StaticImage
                src='../images/Me.jpg'
                alt='My Profile'
                placeholder='blurred'
                layout='fixed'
                width={200}
                height={200}
                style={{
                    borderRadius: '10rem',
                }}
            />
        </StyledImg>

        <p>
            <Link to='/about'>Go to about</Link> <br />
            <Link to='/archives'>Go to archives</Link> <br />
            <Link to='/blog'>Go to posts</Link> <br />
            <Link to='/tags'>Go to tags</Link> <br />
        </p>
    </Layout>
)

export default IndexPage
