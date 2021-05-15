import * as React from 'react'

import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const StyledHero = styled.div`
    .hero__wrapper-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4.8rem;
    }
    .hero__info {
        display: grid;
        text-align: center;
        font-size: 1rem;
        h2 {
            font-size: 2.4rem;
        }
        p {
            font-size: 2.4rem;
            margin-top: 0.4rem;
        }
    }
    .hero__content {
        margin-top: 1.2rem;
        font-size: 2rem;
        p {
            margin: 1.2rem 0;
        }
        a {
            color: rgba(0, 0, 0, 0.8);
            box-shadow: rgb(199 146 234) 0px -2px inset;
            transition: all 300ms ease 0s;
            &:hover {
                box-shadow: rgb(199 146 234) 0px -25px 0px inset;
            }
        }
    }
`
const Hero = () => (
    <StyledHero>
        <div className='hero__wrapper-info'>
            <StaticImage
                src='../../assets/images/Me.jpg'
                alt='My Profile'
                placeholder='blurred'
                layout='fixed'
                width={200}
                height={200}
                style={{
                    borderRadius: '10rem',
                }}
            />
            <div class='hero__info'>
                <h2>
                    <span role='img' aria-label='wave emoji'>
                        👋
                    </span>
                    Hey Folks, I'm Boyan Liu
                </h2>
                <p>
                    <span role='img' aria-label='laptop emoji'>
                        💻
                    </span>
                    Frontend/Software developer
                </p>
            </div>
        </div>
        <div class='hero__content'>
            <p>Thanks for dropping by!</p>
            <p>
                This website is a collection of all posts I've written in my
                journey of learning programming and web development. You can
                read the{' '}
                <a
                    href='https://amanhimself.dev/blog'
                    rel='noopener noreferrer'
                    aria-label='Blog Link'
                >
                    blog here
                </a>{' '}
                or learn more{' '}
                <a
                    href='https://amanhimself.dev/about'
                    rel='noopener noreferrer'
                    aria-label='About me page'
                >
                    about me
                </a>
                .
            </p>
        </div>
    </StyledHero>
)

export default Hero
