const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	lintOnSave: false,
	devServer: {
		host: "localhost",
		port: 8081,
		https: false,
		open: true,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8000',
				changeOrigin: true,  // 是否跨域
				pathRewrite: {
					'^/api': ''
				}
			},
		}
	}
})
