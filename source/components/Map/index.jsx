// @flow

import * as React from 'react'
import { Platform, Text } from 'react-native'

import { MapConstructor } from './constructor'
import WebMap from './map.web'

type Props = {
	children: React.Node
}

export const Map = () => {
	return(
		{
			...Platform.OS === 'web' ?
				<WebMap /> : <MapConstructor /> 
		}
	)
}