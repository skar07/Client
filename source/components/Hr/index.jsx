// @flow

import * as React from 'react'
import { View, Text } from 'react-native'
import Styled from 'styled-components/native'

const HRView = Styled.View`
	flex: 1;
	width: ${props => props.width || '100%'};
	marginVertical: 10px;
	borderTopWidth: ${props => props.thickness + 'px'}
	border: ${props => props.color}
`

type Props = {
	/** The color of the horizontal rule */
      color?: string,
	/** The thickness of the horizontal rule in pixels */
      thickness?: number,
	width?: string | number
}

const Hr = (props: Props) => (
	<HRView
		{...props}
	/>
)

Hr.defaultProps = {
      color: '#eee',
      thickness: 1
}

export default Hr