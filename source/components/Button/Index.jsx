// @flow
import * as React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import ButtonText from './Text'
import ButtonContainer from './Container'

type Props = {
	/** 
		* The button background 
		* @see See [Wikipedia](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) for a list of color names
		*
		* A string (X11) or hex is supported
	*/
	background?: hex,
	/** 
		The button text color 
		@see See [Wikipedia](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) for a list of color names
		*
		* A string (X11) or hex is supported
	*/
	color?: hex,
	/** The content of the button - a string or a React Node */
	content: string | React.Node,
	/** Whether the button is rounded or by how many pixels */
	rounded?: boolean | number,
	/** The size of the text in pixels */
	textSize?: number,
	/** Whether the button is disabled */
	disabled?: boolean,
	/** Description of the button for A11y */
	description: string,
	/** The width of a button */
	width?: number,
	/** Execute on press */
	onPress?: Function,

	marginVertical?: number
}	

/**
    * A button is an  interactive component
    *
    * @version 0.0.1
    * @since 0.0.1
    * @author [Chiru B](https://github.com/itsezc)
*/
const Button = (props: Props): React.Node => {

	const { 
		background, 
		rounded,
		color,
		textSize,
		content,
		disabled,
		width,
		description,
		onPress,
		marginVertical
	} = props

	const [isDisabled, setDisabled] = React.useState<typeof disabled>(disabled)

	return(
		<TouchableWithoutFeedback
			accessible={isDisabled}
			accessibilityLabel={
				typeof content === 'string' ?
					content : 'Button'
			}
			accessibilityHint={description}
			accessibilityState={{
				disabled
			}}
			onPress={isDisabled === true ? null : onPress}
		>
			<ButtonContainer 
				background={isDisabled === true ? 'gray' : background}
				rounded={rounded === true ?  5 : rounded}
				width={width}
				marginVertical={marginVertical}
			>
				<ButtonText
					selectable
					color={color}
				>
					{content}
				</ButtonText>
			</ButtonContainer>
		</TouchableWithoutFeedback>
	)
}

Button.defaultProps = {
	disabled: false,
	background: 'black',
	color: 'white',
	rounded: false,
	textSize: 12,
	content: 'Button'
}

export default Button