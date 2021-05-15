import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hero from '../components/Home/Hero'
import PostPreview from '../components/PostPreview'
const IndexPage = () => (
    <Layout>
        <Seo title='Home' />
        <Hero />
        <>
            <h2>
                <span role='img' aria-label='sparkle emoji'>
                    ✨
                </span>
                If you want to read latest posts, you should read one of the
                following:
            </h2>
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
        </>
    </Layout>
)

export default IndexPage
