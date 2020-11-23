module.exports = {
    siteMetadata:{
        title: 'Frontend Masters Gatsby Workshop',
        description: 'A site built during a Gatsby Workshop with Frontnd Masters'
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-emotion`,
        {
        resolve: 'gatsby-plugin-mdx',
        options: {
            defaultLayouts: {
                default: require.resolve('./src/components/Layout.js')
            }
        }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: './src/posts'
            }
        }

    ],
};