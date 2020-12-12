import React from 'react'
import { Text, CardItem, Card, Thumbnail } from 'native-base';
import { StyleSheet, View, PixelRatio } from 'react-native'

export default function Message(props) {

	// console.log( 2 / PixelRatio.getPixelSizeForLayoutSize(1))

	return (
		<View style={{ flexDirection: 'row', justifyContent: props.data.isMine ? 'flex-end' : 'flex-start' }}>
			<Card style={ styles.card } noShadow>
				<CardItem bordered>
					<View style={ styles.headerMessage }>
						<Thumbnail small source={{ uri: props.data.image }} />
						<View style={ styles.headerTitle }>
							<Text style={ styles.headerTitleName }>{ props.data.name }</Text>
							<Text style={ styles.headerTitleCaption }>{ props.data.date }</Text>
						</View>
					</View>
				</CardItem>
				<CardItem body>
					<Text style={ styles.messageText }>{ props.data.message }</Text>
				 </CardItem>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	headerMessage : {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	headerTitle: {
		flex: 1,
		marginLeft: 10,
		flexWrap: 'nowrap',
	},
	headerTitleName: {
		fontSize: 15,
		color: '#3a3a3a',
		fontFamily: 'Montserrat_Medium'
	},
	headerTitleCaption: {
		fontSize: 11,
		color: 'grey',
		fontFamily: 'Montserrat_Regular'
	},
	card: {
		width: '85%',
		marginBottom: 12,
		borderColor: '#4b378c',

	},
	messageText: {
		fontSize: 14,
		color: '#3a3a3a',
		fontFamily: 'Montserrat_Regular'
	},
})