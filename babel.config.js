module.exports = function(api) {
	
	api.cache(true)

	return {
		presets: ['@babel/preset-env', '@babel/preset-flow', 'module:metro-react-native-babel-preset'],
		plugins: [
			'@babel/proposal-class-properties',
			'@babel/proposal-object-rest-spread',
			'react-native-web',
		]
	}
}