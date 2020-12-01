module.exports = {
    siteMetadata:{
        title: 'Frontend Masters Gatsby Workshop',
        description: 'A site built during a Gatsby Workshop with Frontnd Masters'
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-emotion',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        
        {
        resolve: 'gatsby-plugin-mdx',
        options: {
            defaultLayouts: {
                default: require.resolve('./src/components/Layout.js')
            },
            gatsbyRemarkPlugins: ['gatsby-remark-images'],
            plugins: ['gatsby-remark-images'],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: './src/posts'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images'
            }
        },
        {
            resolve: 'gatsby-source-instagram',
            options:{
                username: 475433070
            }
        },
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyzer',
            options: {
                production: true,
                disable: !process.env.ANALYZE_BUNDLE_SIZE,
                generateStatsFile: true,
                analyzerMode: 'static'
            }
        },
        
    ],
};