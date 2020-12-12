import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import {
	Container, Button, Content, Item, Input, Right, View, Text, Header, Left, Body, Title, Icon
} from 'native-base'

import { Ionicons } from '@expo/vector-icons';


export default function CreateGroupScreen(props) {

	const [loading, setLoading] = useState(false)
	
	return (
		<Container>
			<Header style={{ backgroundColor: "#4b378c" }} androidStatusBarColor="#4b378c">
				<Left>
					<Ionicons onPress={() => props.navigation.goBack() } name="arrow-back-outline" size={24} color="white" />
				</Left>
				<Body>
					<Title>Crear grupo</Title>
				</Body>
				<Right />
			</Header>
			<Content padder>
				
				<Item rounded>
					<Ionicons style={{ marginLeft: 14 }} name="people-outline" size={24} color="grey" />
	            	<Input placeholderTextColor="grey" style={ styles.input } placeholder='Nombre de tu grupo'/>
					<Ionicons style={{ marginRight: 14 }} name="send" size={24} color="grey" />
	          	</Item>

			</Content>
		</Container>
	)

}

const styles = StyleSheet.create({
	input: {
		fontSize: 15,
	},
})