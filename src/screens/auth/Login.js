import React from 'react'

import { StyleSheet, View, Modal, ActivityIndicator, Alert } from 'react-native'
import { Container, Text, Card, CardItem, Content, Item, Input, Icon, Button } from 'native-base' 

export default function Login() {

	return (
		<Container>
			<Content padder contentContainerStyle={ styles.contentStyles }>
				<Card>
					<CardItem header style={ styles.center }>
						<Text style={ styles.loginTitle }>Inicio de sesión</Text>
					</CardItem>
					<CardItem body>
						<Item>
							<Icon active name='person' />
			            	<Input placeholder='Usuario' />
			          	</Item>
					</CardItem>
					<CardItem body>
						<Item>
							<Icon active name='lock' />
			            	<Input placeholder='Contraseña' />
			          	</Item>
					</CardItem>
					<CardItem body style={ styles.cardButtons }>
						<Button full>
							<Icon name='home' />
							<Text>Entrar</Text>
						</Button>
						<View style={{ marginTop: 20, }}>
							<Text style={ styles.center }>¿Aún no tienes una cuenta?</Text>
							<Text style={[ styles.center, { marginTop: 10 } ]}>Regístrate aquí</Text>
						</View>
					</CardItem>
				</Card>
			</Content>
		</Container>
	)
}


const styles = StyleSheet.create({
	contentStyles: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row'
	},
	cardButtons: {
		flexDirection: 'column',
		marginTop: 10,
	},
	loginTitle: {
		fontSize: 24,
		textAlign: 'center',
	},
	center: {
		justifyContent: 'center',
		textAlign: 'center'
	}

})