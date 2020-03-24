module.exports = function(api) {
	
	api.cache(true)

	return {
		presets: [
			'@babel/preset-env', 
			'@babel/preset-typescript',
			'module:metro-react-native-babel-preset',
			'@babel/preset-react'
		],
		plugins: [
			'@babel/plugin-proposal-class-properties',
			'@babel/proposal-object-rest-spread',
			'react-native-web',
		]
	}
}