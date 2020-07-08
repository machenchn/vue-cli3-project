module.exports = {
    pages: {
        demo: {
            entry: 'src/demo.js',
            template: 'public/demo.html',
        },
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
        },

    },
    chainWebpack: config => {
        // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
        config.plugin('define').tap(args => {
            args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)

            return args
        })
    }
    
}
