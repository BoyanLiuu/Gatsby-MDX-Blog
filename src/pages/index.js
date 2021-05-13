import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => (
    <Layout>
        <Seo title='Home' />
        <h1>Hi people</h1>
        <StaticImage
            src='../images/gatsby-astronauts.png'
            width={300}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt='A Gatsby astronaut'
            style={{ marginBottom: `1.45rem` }}
        />
        <p>
            <Link to='/about'>Go to about</Link> <br />
            <Link to='/archives'>Go to archives</Link> <br />
            <Link to='/blog'>Go to posts</Link> <br />
            <Link to='/tags'>Go to tags</Link> <br />
        </p>
    </Layout>
)

export default IndexPage
