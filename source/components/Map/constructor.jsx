// @flow

import * as React from 'react'
import { WebView } from 'react-native-webview'

export function MapConstructor(): React.Node {
	return(
		<WebView 
			source={{ uri: 'https://google.com' }}
		/>
	)
}