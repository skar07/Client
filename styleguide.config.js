const webpack = require('webpack');

module.exports = {
	require: ['@babel/polyfill'],
	components: 'source/components/**/index.jsx',
	webpackConfig: {
		resolve: {
			// auto resolves any react-native import as react-native-web
			alias: { 'react-native': 'react-native-web' },
			extensions: ['.web.js', '.js', '.jsx'],
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					loader: 'babel-loader',
					exclude: [/node_modules/],
				},
				{
					test: /\.(jpe?g|png|gif)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								hash: 'sha512',
								digest: 'hex',
								name: '[hash].[ext]',
							},
						},
					],
				},
				{
					test: /\.ttf$/,
					loader: 'url-loader',
				},
				{
					test: /postMock.html$/,
					use: {
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						},
					},
				}
			],
		},
		// Most react native projects will need some extra plugin configuration.
		plugins: [
			// Add __DEV__ flag to browser example.
			new webpack.DefinePlugin({
				__DEV__: process.env,
			}),
		],
	},
};