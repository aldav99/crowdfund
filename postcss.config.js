module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-custom-media')({
            importFrom: {
                customMedia: {
                    '--phone': '(max-width: 541px)'
                }
            }
        }),
        require('cssnano')({preset:'default'})
    ]
}