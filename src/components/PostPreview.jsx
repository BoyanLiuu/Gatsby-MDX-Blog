import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const StyledPostPreview = styled.div`
    width: 80%;
    margin-bottom: 1.6rem;

    background: rgb(255, 255, 255);
    color: rgb(1, 1, 1);
    padding: 0.8rem 1.2rem;
    border-radius: 0.5rem;
    transition: all 300ms ease 0s;
    border: 0.2rem solid rgb(1, 1, 1);
    box-shadow: rgb(1 1 1) 0.3rem 0.3rem 0rem;
    text-align: center;
    a {
        color: rgb(199, 146, 234);
    }
    & :hover {
        border: 2px solid rgb(199, 146, 234);
        box-shadow: rgb(199 146 234) 0px 5px 0px;
    }
    .post--title,
    .post--details {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            margin: 0;
        }
    }
`
const PostPreview = () => (
    <StyledPostPreview>
        <a href='/blog/create-custom-tab-bar-in-react-native/'>
            <div class='post--title'>
                <StaticImage
                    src='../assets/images/templogo.webp'
                    alt='post logo'
                    placeholder='blurred'
                    layout='fixed'
                    width={40}
                    height={40}
                />
                <h2>How to Create a Custom Tab Bar in React Native</h2>
            </div>
            <div class='post--details'>
                <p>
                    <span role='img' aria-label='left hand pointer emoji'>
                        🕒
                    </span>{' '}
                    Published on May 7, 2021{' '}
                    <span role='img' aria-label='left hand pointer emoji'>
                        ⚡️
                    </span>{' '}
                    14 minutes read
                </p>
                <span role='img' aria-label='tag emoji'>
                    🔖{' '}
                </span>
                <a href='/tags/react-native'>#react-native </a>
            </div>
        </a>
    </StyledPostPreview>
)

export default PostPreview
