module.exports = {
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader?attrs[]=video:src'
            }, 
            {
                test: /\.mp4$/,
                loader: 'url?limit=10000&mimetype=video/mp4'
            }
        ]
    },
};