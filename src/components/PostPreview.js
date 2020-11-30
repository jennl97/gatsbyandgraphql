import React from "react";
import { Link } from 'gatsby';
import { css } from 'gatsby-plugin-emotion';
import ReadLink from './Read-Link';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => (
    <article 
    css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;
        display: flex;

        :first-of-type{
            margin-top: 1rem;
        }
    `}>
        <div css={css`width: 50%;`}>
        <Link to={post.slug} css={css`margin: 1rem 1rem 0 0;`}>
            <Image
                fluid={post.images.sharp.fluid}
                css={css`{ margin-top: 0; max-width: 400px;}`}
                alt={post.title}
            />
        </Link>
        </div>
        <div>
        <h3><Link to={post.slug}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug}>Read post</ReadLink>
        </div>
    </article>
);

export default PostPreview;