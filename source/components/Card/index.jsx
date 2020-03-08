// @flow

import * as React from 'react'
import Styled from 'styled-components/native'

import { View, Text, Image } from 'react-native'
import Button from '../Button'
import Hr from '../Hr'

/*
	Versions

	- Profile Card
	- Product Card
	- Pricing Card
	- Components to build own card
	
*/

const CardContainer = Styled.View`
	width: 320px;
	border: 1px solid gray;
	border-radius: 8px;
	alignItems: center;
	flex: 1;
	justifyContent: center;
`

const CardType = Styled.View`
	border-radius: 50px;
	background-color: #f6303a;
	width: 36px;
	height: 36px;
	position: absolute;
	zIndex: 3;
	top: 120px;
	left: 28px;
`

const CardTitle = Styled.Text`
	paddingTop: 25px;
	paddingHorizontal: 25px;
	font-size: 18.1px;
	text-align: center;
`

const CardText = Styled.Text`
	padding: 25px;
	font-size: 12px;
`

export const Card = () => {
	return(
		<CardContainer>
			<Image
				source={{ uri: 'https://i.ytimg.com/vi/pasvhLZkWy8/maxresdefault.jpg' }}  
				style={{ width: '100%', minHeight: '150px', borderTopLeftRadius: '7px', borderTopRightRadius: '7px', zIndex: 1 }}
			/>
			<>
				<Image 
					source={{ uri: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMwIiB3aWR0aD0iMTM3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMzcgMjkuODIyVjMwSDB2LTguMTM0YzQuMzU3LTIuMjE2IDguNDItNC44NjkgMTIuMDkzLTcuOTIzTDIxLjY0IDUuOTlDMjYuNDE0IDEuOTk2IDMyLjcyNCAwIDM5IDBzMTIuNTg2IDEuOTk2IDE3LjM2IDUuOTg5bDkuNTggNy45NTRjMTIuMjIgMTAuMTYzIDI4Ljc3OCAxNS44OCA0Ni4wMzcgMTUuODh6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=' }}
					style={{ width: '170px', minHeight: '40px', position: 'absolute', top: 110, left: 0, zIndex: 2 }}
				/>
				<CardType>
					<Image 
						source={{ uri: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB3aWR0aD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjg5NiAxMi42NWMwLTEuNDA2LTEuMDM0LTIuNTM4LTIuMzEzLTIuNTM4YTExMy4yMzUgMTEzLjIzNSAwIDAwLTUuMy0uMTEyaC0uNTYzYy0xLjggMC0zLjU3LjAzMS01LjMuMTEyLTEuMjc2IDAtMi4zMSAxLjEzOC0yLjMxIDIuNTQ0QTQ1Ljc3NiA0NS43NzYgMCAwMDggMTUuOTkzYTQ3Ljc1IDQ3Ljc1IDAgMDAuMTA2IDMuMzRjMCAxLjQwNyAxLjAzNSAyLjU0OCAyLjMxIDIuNTQ4IDEuODIuMDg0IDMuNjg1LjEyMSA1LjU4Mi4xMTggMS45LjAwNyAzLjc2LS4wMyA1LjU4Mi0uMTE4IDEuMjc4IDAgMi4zMTMtMS4xNDEgMi4zMTMtMi41NDdhNDcuNzggNDcuNzggMCAwMC4xMDYtMy4zNDQgNDUuOTA3IDQ1LjkwNyAwIDAwLS4xMDMtMy4zNHpNMTQuNzcgMTl2LTZsNC4zMDggMi45OTh6IiBmaWxsPSIjZmZmIi8+PC9zdmc+' }}
						style={{ width: '36px', height: '36px' }}
					/>
				</CardType>
			</>
			<CardTitle>This is a card's extra long title</CardTitle>
			<CardText>Card text for cards content to go here</CardText>
			<Hr 
				width='60%'
			/>
			<Button 
				rounded={50}
				background='#222'
				color='#fff'
				content='Button'
				marginVertical={10}
			/>
		</CardContainer>
	)
}