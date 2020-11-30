import React from 'react';
import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import usePosts from '../hooks/use-posts';
import Hero from '../components/Hero';

export default () => {
const posts = usePosts();

return (
    <>
    <Hero></Hero>
<Layout>  
    <h2>Check out my blog</h2>
    {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
    ))}

</Layout>
</>
)
}
