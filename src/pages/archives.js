import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

const ArchivesPage = () => (
    <Layout>
        <Seo title='Archives' />
        <h1>Hi from the Archives page</h1>
        <Link to='/'>Go back to the homepage</Link>
    </Layout>
)

export default ArchivesPage
