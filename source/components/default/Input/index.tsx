// @flow 

import * as React from 'react'
import { TextInput } from 'react-native'

type Props = {
	/** A placeholder is the default text */
	placeholder?: string,

	content?: string,

	maxLength?: number,

	password?: boolean
}

const Input = (props: Props) => {

	const {
		placeholder,
            content,
            maxLength,
		password
	} = props

	const { useState } = React
	const [value, updateValue] = useState<typeof content>(content)

	return(
		<TextInput
			onChangeText={text => updateValue(text)}
			value={value}
			placeholder={placeholder}
			maxLength={maxLength}
			secureTextEntry={password}
		/>
	)
}

Input.defaultProps = {
	password: false
}

export default Input

