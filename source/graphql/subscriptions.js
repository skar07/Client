// @flow

import { WebSocketLink } from '@apollo/link-ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'

const buildWSLink = (link: string) => {
	const client = new SubscriptionClient(link, { reconnect: true })
	return new WebSocketLink(client)
}

