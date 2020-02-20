// @flow

import * as React from 'react'

import { ApolloProvider } from '@apollo/client'
import { GraphQLClient } from '../graphql'

type Props = {
	children?: React.Node
}

const CoreComponent = ({ children }: Props): React.Node => (
	<ApolloProvider client={GraphQLClient}>
		{children}
	</ApolloProvider>
)

export { CoreComponent }