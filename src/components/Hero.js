import React from 'react';
import styled from 'styled-components';
import { css } from '@emotion/core';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
    background-image: url('/images/lanceAndersonChicago.jpg');
    background-position: top 20% center;
    background-size: cover;
    height: 50vh;
`;

const TextBox = styled.div`
    background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding: 0 calc((100vw - 550px) / 2) 2rem;
    width: 100%
    
`


const Hero = () => {
    const { image } = useStaticQuery(graphql`
    query{
        image: file(relativePath: { eq: "lanceAndersonChicago.jpg" }) {
            sharp: childImageSharp{
                fluid{
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
    `)
    return (
        <>

           <ImageBackground Tag="section" fluid={image.sharp.fluid}>
               <TextBox>
            <h1 css={css`
                text-shadow: 1px 1px 3px #eeddff66;
                font-size: 2.25rem;
            `}>Frontend Masters + Gatsby &hearts;</h1>
            <p css={css`
                color: #222;
                margin-top: 0;
            `}>Hello USA <Link to="/about/" css={css`
                margin-top: 0.5rem;
            `}>Learn more about me!</Link></p>
            </TextBox>
            </ImageBackground>  
         </>  
       
    )
}

export default Hero;