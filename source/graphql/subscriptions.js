// @flow

import { WebSocketLink } from '@apollo/link-ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'

export const buildWSLink = (link: string) => {
	const client = new SubscriptionClient(link, { reconnect: true })
	return new WebSocketLink(client)
}

