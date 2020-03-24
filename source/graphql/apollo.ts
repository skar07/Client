import { 
	ApolloClient, 
	HttpLink, 
	InMemoryCache 
} from '@apollo/client'

const GraphQLClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: 'https://localhost:8075'
	})
})

export {
	GraphQLClient
}