// @flow

import * as React from 'react'

import { withNamespaces } from 'react-i18next'
import i18n from '../i18n'

import { ApolloProvider } from '@apollo/client'
import { GraphQLClient } from '../graphql'

import { ThemeProvider } from 'styled-components'

type Props = {
	children?: React.Node
}

const CoreComponent = ({ children }: Props): React.Node => {

	return(
		<ApolloProvider client={GraphQLClient}>
			<ThemeProvider>
				{children}
			</ThemeProvider>
		</ApolloProvider>
	)
}

export { CoreComponent }