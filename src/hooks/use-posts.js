import {  graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
const data = useStaticQuery(graphql`
query {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
              author
              images {
                sharp: childImageSharp {
                  fluid(
                    maxWidth: 100                    
                  ){
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            excerpt
          }
        }
      }
`)

return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    images: post.frontmatter.images,
    excerpt: post.excerpt
}))
}
export default usePosts;