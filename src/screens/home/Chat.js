import React, { useState, useEffect } from 'react';
import { 
	Container, Text, Content, Header, 
	Left, Button, Icon, Item, Input, 
	Body, Title, Footer, Right, Subtitle
} from 'native-base';

import { StyleSheet, View, Alert,  } from 'react-native';

import Message from '../../components/Message'
import data from '../../dummy_data.js'


export default function ChatScreen(props) {

	const [loading, setLoading] = useState(true)

	useEffect(() => (() => {
		// get dasta usibg props.route.params.user
	}), [])

	return (
		<Container>
			<Header style={{ backgroundColor: "#4b378c" }} androidStatusBarColor="#4b378c">
				<Left>
					<Icon onPress={() => props.navigation.goBack() } name='arrow-back' style={{ color: 'white' }} />
				</Left>
				<Body>
					<Title>Westeros</Title>
					<Subtitle>7 miembros</Subtitle>
				</Body>
				<Right />
			</Header>
			<Content padder>

				{ data.map((value, index) => <Message key={index} data={value} />) }

			</Content>

			<View style={ styles.footer } >
				<Item rounded style={ styles.inputContainer }>
					<Input placeholderTextColor="lightgrey" style={ styles.inputStyle } placeholder="Type your message..." />
					<Icon active name='send' style={{ color: '#723477' }} onPress={ () => Alert.alert('message sended') } />
				</Item>
			</View >
		</Container>
	)
}

const styles = StyleSheet.create({
	footer: {
		padding: 10
	},
	inputStyle: {
		fontSize: 16,
		color: '#3a3a3a',
	},
	inputContainer: {
		borderColor: '#723477',
		paddingLeft: 8
	},
});
