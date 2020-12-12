import { StatusBar } from 'expo-status-bar';
import React, { useReducer, useState, useEffect, useMemo } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import { StyleSheet, View, Modal, ActivityIndicator, Alert } from 'react-native'
import { Text } from 'native-base'

import { AuthContext } from './src/authcontext'

import AuthStackScreen from './src/navigation/authStackScreen'

// Vistas
import HomeScreen from './src/screens/home/Home'
import ChatScreen from './src/screens/home/Chat'
import DrawerContent from './src/screens/home/DrawerContent'
import CreateGroupScreen from './src/screens/home/CreateGroup'

const Drawer = createDrawerNavigator();


export default function App() {

	const [isReady, setIsReady]           = useState(false)
	const [modalVisible, setModalVisible] = useState(false)

	// cargar fuentes y obtener el usuario logueado
	useEffect(() => {
		async function getUser(){
			// obtenrer usuario
			let userstr = null;
			let user    = null;

			try {
				userstr = await AsyncStorage.getItem('user')
				user    = JSON.parse(userstr)
			}
			catch(err){
				// Alert.alert('', err)
				console.error(err)
			}

			dispatch({type: 'LOGIN', user: user})

			// Cargar fuentes
			await Font.loadAsync({
				Roboto: require('native-base/Fonts/Roboto.ttf'),
				Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
				Montserrat_Regular: require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
				Montserrat_Light: require('./assets/fonts/Montserrat/Montserrat-Light.ttf'),
				Montserrat_Medium: require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'),
			});

			setIsReady(true)
		}
		getUser()
	}, [])


	const initialState = {
		isLoading: true,
		user: null,
	}

	const authReducer = (prevState, action) => {
		switch( action.type ){

			case 'LOGIN':
				console.log('RETRIEVE_USER')
				return {
					...prevState,
					user: action.user,
					isLoading: false
				}

			case 'LOGOUT':
				return {
					...prevState,
					user: null,
					isLoading: false
				}

			case 'REGISTER':
				return {
					...prevState,
					user: action.user,
					isLoading: false
				}
		}
	}
	
	const [loginState, dispatch] = useReducer(authReducer, initialState)


	const authContext = useMemo(() => {
		
		return {
			async login(data){
				setModalVisible(true)

				try	{
					// await axios.post('/api/login', data)
					// .then(async (res) => {
					// 	setModalVisible(false)
					// 	console.log(res.data)

					// 	try {
					// 		let user = {
					// 			user: res.data.user,
					// 			profile: res.data.profile
					// 		}

					// 		await AsyncStorage.setItem('user', JSON.stringify(user))

					// 		dispatch({type: 'LOGIN', user: user})
					// 	}
					// 	catch(err){
					// 		console.error(err)
					// 		Alert.alert('', err.message)
					// 	}
					// })
				}
				catch(err){
					setModalVisible(false)

				}
			},
			async register(data){
				setModalVisible(true)

				try {
					// await axios.post('/api/register', data)
					// .then(async (res) => {
					// 	console.log(res.data)
					// 	setModalVisible(false)

					// 	try {
					// 		let user = {
					// 			user: res.data.user,
					// 			profile: res.data.profile
					// 		}

					// 		await AsyncStorage.setItem('user', JSON.stringify(user))

					// 		dispatch({type: 'REGISTER', user: user})
					// 	}
					// 	catch(err){
					// 		console.error(err)
					// 		Alert.alert('', err.message)
					// 	}
					// })
				}
				catch(err){
					setModalVisible(false)
				}
			},
			logout: async () => {
				await AsyncStorage.removeItem('user')
				dispatch({type: 'LOGOUT'})
			}
		}
	}, [])


	if (!isReady) { return <AppLoading /> }

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>

				<Modal
					animationType="fade"
					transparent={true}
					visible={modalVisible}
					statusBarTranslucent={true}
					onRequestClose={() => {
						setModalVisible(!modalVisible)
					}}
				>
					<View style={[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
						<View style={styles.modalView}>
							<ActivityIndicator size="large" color="purple" />
							<Text style={styles.marginTop10}>Cargando...</Text>
						</View>
					</View>
				</Modal>

				{
					<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
						<Drawer.Screen name="HomeScreen" component={HomeScreen} />
						<Drawer.Screen name="ChatScreen" component={ChatScreen} />
						<Drawer.Screen name="CreateGroupScreen" component={CreateGroupScreen} />
					</Drawer.Navigator>
				}

			</NavigationContainer>
		</AuthContext.Provider>
	);
}

// loginState.user !== null ? (
						
// 					) : <AuthStackScreen />

const styles = StyleSheet.create({
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
		padding: 30,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		width: 200,
	},
})