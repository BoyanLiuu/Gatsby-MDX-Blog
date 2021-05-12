import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

const PostsPage = () => (
    <Layout>
        <Seo title='tags' />
        <h1>Hi from the Tags page</h1>
        <Link to='/'>Go back to the homepage</Link>
    </Layout>
)

export default PostsPage
