import React from 'react'

import { withNamespaces } from 'react-i18next'
import i18n from '../i18n'

import { ApolloProvider } from '@apollo/client'
import { GraphQLClient } from '../graphql'

import { ThemeProvider } from 'styled-components'

const CoreComponent = ({ children }): JSX.Element => {

	return(
		<ApolloProvider client={GraphQLClient}>
			<ThemeProvider>
				{children}
			</ThemeProvider>
		</ApolloProvider>
	)
}

export { CoreComponent }