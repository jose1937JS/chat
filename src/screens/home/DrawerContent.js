import React, { useState } from 'react'
import {
	View, StyleSheet, Image, Text, Modal, ActivityIndicator,
} from 'react-native'
import { Input, Item, Button, CheckBox, Body, ListItem } from 'native-base'

import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList
} from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import{ AuthContext } from '../../authcontext';

export default function DrawerContent(props) {

	const { logout } = React.useContext(AuthContext)
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [isChecked, setIsChecked] = useState(false)

	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={ styles.logoContainer }>
						<Image
							source={ require('../../../assets/default.jpg') }
							style={{ width: 50, height: 50, borderRadius: 30 }}
						/>
						<View style={ styles.textLogoContainer }>
							<Text style={ styles.textLogo }>Jose Lopez</Text>
							<Text style={ styles.textCaption }>@josepher</Text>
						</View>
					</View>

					<DrawerItem
						activeBackgroundColor='purple'
						activeTintColor='white'
						style={ styles.items }
						label="Crear grupo"
						onPress={() => {
							setIsModalVisible(true)
							props.navigation.closeDrawer()
						}}
						icon={({color, size}) => (
							<Ionicons name="people-outline" size={24} color="black" />
						)}
					/>
					<DrawerItem
						activeBackgroundColor='purple'
						activeTintColor='white'
						style={ styles.items }
						label="Mensajes"
						onPress={() => {props.navigation.navigate('HomeScreen')}}
						icon={({color, size}) => (
							<Ionicons name="chatbubbles-outline" size={24} color="black" />
						)}
					/>
					<DrawerItem
						style={ styles.items }
						label="Mi perfil"
						onPress={() => {props.navigation.navigate('GroupsScreen')}}
						icon={({color, size}) => (
							<Ionicons name="ios-person-outline" size={24} color="black" />
						)}
					/>
					<DrawerItem
						style={ styles.items }
						label="Notificaciones"
						onPress={() => { props.navigation.navigate('') }}
						icon={({color, size}) => (
							<Ionicons name="notifications-outline" size={24} color="black" />
						)}
					/>
					<DrawerItem
						style={ styles.items }
						label="Información"
						onPress={() => {props.navigation.navigate('GroupsScreen')}}
						icon={({color, size}) => (
							<Ionicons name="information-circle-outline" size={24} color="black" />
						)}
					/>
				</View>
			</DrawerContentScrollView>
			<View style={ styles.salir }>
				<DrawerItem 
					label="Salir"
					onPress={() => { logout() }}
					icon={({color, size}) => (
						<Ionicons name="ios-power" size={24} color="black" />
					)}
				/>
			</View>

			<Modal
				animationType="fade"
				transparent={true}
				visible={ isModalVisible }
				statusBarTranslucent={true}
				onRequestClose={() => {
					setIsModalVisible(false)
				}}
			>
				<View style={[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
					<View style={styles.modalView}>
						<Text style={ styles.crearGrupo }>Crear grupo nuevo</Text>
						<Item rounded success>
							<Ionicons style={{ marginLeft: 14 }} name="people-outline" size={24} color="grey"  />
			            	<Input placeholderTextColor="grey" style={ styles.input } placeholder='Nombre de tu grupo'/>
							<Ionicons style={{ marginRight: 14 }} name="checkmark-circle-outline" size={24} color="green" />
			          	</Item>
			          	<Item rounded style={{ marginTop: 21 }}>
							<Ionicons style={{ marginLeft: 14 }} name="people-outline" size={24} color="grey" />
			            	<Input placeholderTextColor="grey" style={ styles.input } placeholder='Buscar usuarios'/>
			          	</Item>

			          	<Button full style={ styles.crearButton }>
			          		<Ionicons style={{ marginRight: 10, fontSize: 19 }} name="people-outline" size={24} color="white" />
			          		<Text style={{ color: 'white' }} onPress={() => setIsModalVisible(false)}>CREAR</Text>
			          	</Button>
					</View>
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({

	drawerContent: {
	  flex: 1,
	},
	logoContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingVertical: 30,
		paddingHorizontal: 10,
		marginBottom: 20,
		alignItems: 'center',
		backgroundColor: '#f1f1f1'
	},
	textLogoContainer: {
		marginLeft: 15,
	},
	textLogo: {
		color: '#4b378c',
		fontSize: 20,
	},
	textCaption: {
		fontSize: 11,
		color: 'grey'
	},
	items: {
		marginBottom: 0
	},
	input: {
		fontSize: 15,
	},
	crearGrupo: {
		fontSize: 24,
		textAlign: 'center',
		fontWeight: '600',
		marginBottom: 30,
		color: '#4a4a4a'
	},
	crearButton: {
		marginTop: 20,
		backgroundColor: '#4b378c',
		borderRadius: 30
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 10,
		paddingVertical: 30,
		paddingHorizontal: 15,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		width: 300,
	},
	salir: {
		backgroundColor: '#f1f1f1',
	}
})