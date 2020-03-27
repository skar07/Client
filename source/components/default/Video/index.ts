import { requireNativeComponent, ViewPropTypes } from 'react-native'

const viewProps = {
	name: 'Video',
	propTypes: {
		source: propTypes.string,
		...ViewPropTypes
	}
}

export const Video = requireNativeComponent('Video', viewProps)