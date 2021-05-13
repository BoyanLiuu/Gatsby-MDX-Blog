import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

const BlogPage = () => (
    <Layout>
        <Seo title='Posts' />
        <h1>Hi from the posts page</h1>
        <Link to='/'>Go back to the homepage</Link>
    </Layout>
)

export default BlogPage
