// @flow

import * as React from 'react'
import { Image as ImageContainer } from 'react-native'

type Props = {
	/** The source of the image / content */
	source: string,

	circular?: boolean 
}

const Image = (props: Props) => (
	<ImageContainer
		source={source}
	/>
)

export default Image

/**
 
 Import logo from '..

 source={logo}
 source='https://gogle.cm/logo.png'
 source='data:image/png;base64'

 */