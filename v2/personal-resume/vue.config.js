module.exports = {
    configureWebpack: {
        options: {
            title: 'Lucas Viana\'s Résumé'
        },
        module: {
            rules: [
                {
                    test: /\.md$/i,
                    use: 'raw-loader'
                }
            ]
        }
    }
}