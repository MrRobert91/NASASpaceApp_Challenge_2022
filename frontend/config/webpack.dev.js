const paths = require('./paths')
const Dotenv = require('dotenv-webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(common, {
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
		],
	},
	// Set the mode to development or production
	mode: 'development',

	// Control how source maps are generated
	devtool: 'inline-source-map',

	// Spin up a server for quick development
	devServer: {
		historyApiFallback: true,
		contentBase: paths.build,
		open: false,
		compress: true,
		hot: true,
		port: 3000,
		allowedHosts: ['localhost:8000', '127.0.0.1:8000'],
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8000',
        		pathRewrite: { '^/api': '' },
				secure: false,
				logLevel: "debug",
				changeOrigin: true
			}
        },
		headers: {
    		"Access-Control-Allow-Origin": "*",
    		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    		"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  		}
	},

	plugins: [
		new Dotenv({
			path: './.env.development',
		}),
		new ReactRefreshWebpackPlugin(),
	].filter(Boolean)
})
